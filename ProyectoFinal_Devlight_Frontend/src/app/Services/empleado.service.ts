import { inject, Injectable } from '@angular/core';
import { Empleado } from '../Models/Empleado';
import { HttpClient } from '@angular/common/http';
import { appsettings } from '../Settings/appssettings';
import { ResponseAPI } from '../Models/ResponseAPI';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private http = inject(HttpClient);
  private apiUrl: string = appsettings.apiUrl;  // Configuración de URL desde appsettings

  constructor() { }

  // Método para obtener la lista de empleados
  lista() {
    return this.http.get<Empleado[]>(this.apiUrl);
  }

  // Método para obtener un empleado por ID
  obtener(id: number) {
    return this.http.get<Empleado>(`${this.apiUrl}/${id}`);
  }

  // Método para crear un nuevo empleado
  crear(objeto: Empleado) {
    return this.http.post<ResponseAPI>(this.apiUrl, objeto);
  }

  // Método para editar un empleado existente
  editar(objeto: Empleado) {
    return this.http.put<ResponseAPI>(this.apiUrl, objeto);
  }

  // Método para eliminar un empleado por ID
  eliminar(id: number) {
    return this.http.delete<ResponseAPI>(`${this.apiUrl}/${id}`);
  }
}
