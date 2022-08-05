import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ListaUsuariosService {

  /*usuarios:Usuario=[
    {nombre:"elias", apellido:"salazar", cargo:"programador", salario:200},
    {nombre:"nidian", apellido:"vergara", cargo:"vendedora", salario:180},
    {nombre:"jhan", apellido:"aguilar", cargo:"mecanico", salario:200}
  ]*/

  usuarios:Usuario=[];

  constructor( private data:DataService) { }
  
  obtenerUsuarios(){
   return this.data.cargarUsuarios();
  }

  setUsuarios(misUsuarios:any){
    
    this.usuarios = misUsuarios[0];
    console.log(this.usuarios)
  }
}
