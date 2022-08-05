import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) {}

  cargarUsuarios(){
    return this.httpClient.get('https://listatareas-7b615-default-rtdb.firebaseio.com/data.json')
  }

  guardarUsuarios(usuarios:Usuario[]){

    this.httpClient.put('https://listatareas-7b615-default-rtdb.firebaseio.com/data.json', usuarios).subscribe(
      response => console.log("se han guardado los ususarios"+response),
      error => console.log("Error: "+ error)
    )


  }
}
