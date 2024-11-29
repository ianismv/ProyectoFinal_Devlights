import { ResponseAPI } from './../../Models/ResponseAPI';
import { Component, inject, Input, OnInit } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { NgxSpinnerService ,NgxSpinnerModule } from 'ngx-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { EmpleadoService } from '../../Services/empleado.service';
import { Router } from '@angular/router';
import { Empleado } from '../../Models/Empleado';

@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, NgxSpinnerModule, MatSnackBarModule],
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  @Input('id') idEmpleado!: number;
  public titulo: string = 'Nuevo Empleado';
  private empleadoServicio = inject(EmpleadoService);
  private formBuild = inject(FormBuilder);


  public formEmpleado: FormGroup = this.formBuild.group({
    nombreCompleto: [
      '',
      [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]
    ],
    correo: [
      '',
      [Validators.required, Validators.email]
    ],
    sueldo: [
      0,
      [Validators.required, Validators.min(1)]
    ],
    fechaContrato: [
      '',
      [Validators.required]
    ],
  });

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    if (this.idEmpleado != 0) {
      this.titulo = 'Editar Empleado';
    this.spinner.show();  // Muestra el spinner antes de hacer la llamada al backend
      this.empleadoServicio.obtener(this.idEmpleado).subscribe({
        next: (data) => {
          this.spinner.hide();
          console.log(data);
          let fechaContrato: string = '';

          if (data.fechaContrato) {
            const [dia, mes, anio] = data.fechaContrato.split('/'); // Se asume formato 'dd/MM/yyyy'
            const fecha = new Date(`${anio}-${mes}-${dia}`);  // Crea un objeto Date con el formato 'yyyy-MM-dd'

            fechaContrato = fecha.toISOString().split('T')[0]; // Extrae solo la parte 'yyyy-MM-dd'
          }
          this.formEmpleado.patchValue({
            nombreCompleto: data.nombreCompleto,
            correo: data.correo,
            sueldo: data.sueldo,
            fechaContrato: fechaContrato
          })
        },
        error: (err) => {
          console.log(err.message)
        }
      })
    }
  }

  guardar() {
    if (this.formEmpleado.invalid) {
      this.formEmpleado.markAllAsTouched();
      // alert("Por favor, rellene todos los campos correctamente.");
      return;
    }
    this.spinner.show();  // Muestra el spinner antes de hacer la llamada al backend

    const objeto: Empleado = {
      idEmpleado: this.idEmpleado,
      nombreCompleto: this.formEmpleado.value.nombreCompleto,
      correo: this.formEmpleado.value.correo,
      sueldo: this.formEmpleado.value.sueldo,
      fechaContrato: this.formEmpleado.value.fechaContrato,
    }

    if (this.idEmpleado == 0) {
      this.empleadoServicio.crear(objeto).subscribe({
        next: (data) => {
          this.spinner.hide();
          if (data.isSuccess) {
            this.snackBar.open('Empleado cargado correctamente', 'Cerrar', {
              duration: 3000,
              horizontalPosition: 'center',
              verticalPosition: 'top',
              panelClass: ['success-snackbar']
            });
            this.router.navigate(["/"]);
          } else {
            this.snackBar.open('Error al crear el empleado', 'Cerrar', {
              duration: 3000,
              horizontalPosition: 'center',
              verticalPosition: 'top',
              panelClass: ['error-snackbar']
            });
            console.log(Response);
            console.log(data);
            // alert("Error al crear")
          }
        },
        error: (err) => {
          this.spinner.hide();
          console.log(err.message)
          this.snackBar.open('Error al conectar con el servidor', 'Cerrar', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
            panelClass: ['error-snackbar']
          });
        }
      })
    } else {
      this.empleadoServicio.editar(objeto).subscribe({
        next: (data) => {
          this.spinner.hide();
          if (data.isSuccess) {
            this.snackBar.open('Empleado editado correctamente', 'Cerrar', {
              duration: 3000,
              horizontalPosition: 'center',
              verticalPosition: 'top',
              panelClass: ['success-snackbar']
            });
            this.router.navigate(["/"]);
          } else {
            this.snackBar.open('Error al editar el empleado', 'Cerrar', {
              duration: 3000,
              horizontalPosition: 'center',
              verticalPosition: 'top',
              panelClass: ['error-snackbar']
            });
            // alert("Error al editar")
          }
        },
        error: (err) => {
          this.spinner.hide();
          this.snackBar.open('Error al editar el empleado', 'Cerrar', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
            panelClass: ['error-snackbar']
          });
          console.log(err.message)
        }
      })
    }
  }

  volver() {
    this.router.navigate(["/"]);
  }

}
