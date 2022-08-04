import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  
  eliminando:boolean=false;
  
  constructor() { }

  ngOnInit(): void {
  }
  
  
  eliminar(){
    this.eliminando = confirm("realmente desea eliminar este usuario?");
    this.eliminando ? alert("el usuario se ha eliminado"): alert("el usuario continua");
  }

}
