import { Component, inject, Input, OnInit } from '@angular/core';
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
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
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

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (this.idEmpleado != 0) {
      this.titulo = 'Editar Empleado';
      this.empleadoServicio.obtener(this.idEmpleado).subscribe({
        next: (data) => {
          this.formEmpleado.patchValue({
            nombreCompleto: data.nombreCompleto,
            correo: data.correo,
            sueldo: data.sueldo,
            fechaContrato: data.fechaContrato
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
      alert("Por favor, rellene todos los campos correctamente.");
      return;
    }

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
          if (data.isSuccess) {
            this.router.navigate(["/"]);
          } else {
            alert("Error al crear")
          }
        },
        error: (err) => {
          console.log(err.message)
        }
      })
    } else {
      this.empleadoServicio.editar(objeto).subscribe({
        next: (data) => {
          if (data.isSuccess) {
            this.router.navigate(["/"]);
          } else {
            alert("Error al editar")
          }
        },
        error: (err) => {
          console.log(err.message)
        }
      })
    }
  }

  volver() {
    this.router.navigate(["/"]);
  }

}
