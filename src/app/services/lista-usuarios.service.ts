import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class ListaUsuariosService {

  usuarios:Usuario=[
    {nombre:"elias", apellido:"salazar", cargo:"programador", salario:200},
    {nombre:"nidian", apellido:"vergara", cargo:"vendedora", salario:180},
    {nombre:"jhan", apellido:"aguilar", cargo:"mecanico", salario:200}
  ]

  constructor() { }
}
