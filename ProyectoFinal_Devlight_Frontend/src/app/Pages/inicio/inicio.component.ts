import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { EmpleadoService } from '../../Services/empleado.service';
import { Empleado } from '../../Models/Empleado';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [MatCardModule,MatTableModule,MatIconModule,MatButtonModule,CommonModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  private empleadoServicio = inject(EmpleadoService);
  public listaEmpleados:Empleado[] = [];
  public displayedColumns : string[] = ['nombreCompleto','correo','sueldo','fechaContrato','accion'];

  obtenerEmpleados(){
    this.empleadoServicio.lista().subscribe({
      next:(data)=>{
        if(data.length > 0){
          this.listaEmpleados = data; // Asignar la lista de empleados si hay empleados
        }
        else {
          this.listaEmpleados = []; // Asignar una lista vacía si no hay empleados
        }
      },
      error:(err)=>{
        console.log(err.message)
      }
    })
  }

  constructor(private router:Router){

    this.obtenerEmpleados();
  }

  nuevo(){
    this.router.navigate(['/empleado',0]);
  }

  editar(objeto:Empleado){
    this.router.navigate(['/empleado',objeto.idEmpleado])
  }

  eliminar(objeto:Empleado){
    if(confirm("Desea eliminar al empleado: " + objeto.nombreCompleto + " de la lista de empleados?")){
      this.empleadoServicio.eliminar(objeto.idEmpleado).subscribe({
        next:(data)=>{
          if(data.isSuccess){
            this.obtenerEmpleados();
          }else{
            alert("No se pudo eliminar.")
          }
        },
        error:(err)=>
          console.log(err.message)
      })
    }
  }

}
