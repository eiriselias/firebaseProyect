import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  
  eliminando:boolean=false;
  opcion:string="";
  boton:string="";
  color:string="";
  
  constructor() { }

  ngOnInit(): void {
  }
  
  nuevo(){
    this.opcion="nuevo";
    this.boton="Guardar";
    this.color="primary";
  }

  modificar(){
    this.opcion="modificar";
    this.boton="Modificar";
    this.color="success";
  }
  
  eliminar(){
    this.opcion="eliminar";
    this.boton="Eliminar";
    this.color="danger";
  }

}
