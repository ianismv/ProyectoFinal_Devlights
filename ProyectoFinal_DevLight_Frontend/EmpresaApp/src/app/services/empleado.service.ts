import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { appsettings } from '../settings/appsettings';
import { Empleado } from '../models/Empleado';
import { ResponseAPI } from '../models/ResponseAPI';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private http = inject(HttpClient);
  private apiUrl: string = appsettings.apiUrl + "Empleado";
  
  constructor() { }

  lista(){
    return this.http.get<Empleado[]>(this.apiUrl);
  }
  obtener(id:number){
    return this.http.get<Empleado>(`${this.apiUrl}/${id}`);
  }
  crear(objeto:Empleado){
    return this.http.post<ResponseAPI>(this.apiUrl, objeto);
  }
  editar(objeto:Empleado){
    return this.http.put<ResponseAPI>(this.apiUrl, objeto);
  }
  eliminar(id:number){
    return this.http.delete<ResponseAPI>(`${this.apiUrl}/${id}`);
  }
}
