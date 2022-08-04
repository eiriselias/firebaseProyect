import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) {}

  guardarUsuarios(usuarios:Usuario[]){

    this.httpClient.post('https://listatareas-7b615-default-rtdb.firebaseio.com/data.json', usuarios).subscribe(
      response => console.log("se han guardado los ususarios"+response),
      error => console.log("Error: "+ error)
    )


  }
}
