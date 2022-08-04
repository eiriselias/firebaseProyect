import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ListaUsuariosService } from 'src/app/services/lista-usuarios.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  
  id:number=0;
  eliminando:boolean=false;
  opcion:string="";
  boton:string="";
  color:string="";
  usuarios:any;
  nuevoUsuario = new FormGroup({
    nombre: new FormControl(""),
    apellido: new FormControl(""),
    cargo: new FormControl(""),
    salario: new FormControl(0),
  })
  
  
  constructor(private usuariosTabla:ListaUsuariosService) {

   }

  ngOnInit(): void {
    this.usuarios = this.usuariosTabla.usuarios;
  }
  
  nuevo(){
    this.opcion="nuevo";
    this.boton="Guardar";
    this.color="primary";
  }

  modificar(i:number){
    this.opcion="modificar";
    this.boton="Modificar";
    this.color="success";
    this.id = i;
    this.nuevoUsuario = new FormGroup({
      nombre: new FormControl(this.usuarios[this.id].nombre),
      apellido: new FormControl(this.usuarios[this.id].apellido),
      cargo: new FormControl(this.usuarios[this.id].cargo),
      salario: new FormControl(this.usuarios[this.id].salario),
    }) ;
  }
  
  eliminar(i:number){
    this.opcion="eliminar";
    this.boton="Eliminar";
    this.color="danger";
    this.id = i;
  }
  accion(){
    if(this.opcion=="nuevo"){
      this.usuarios.push(this.nuevoUsuario.value)
      this.nuevoUsuario.reset();
    }
    if(this.opcion=="modificar"){
      this.usuarios[this.id] = this.nuevoUsuario.value;
      this.nuevoUsuario.reset();
    }
    if(this.opcion=="eliminar"){
      this.usuarios = this.usuarios.filter((us:number)=> us != this.usuarios[this.id])
    }
  }

}
