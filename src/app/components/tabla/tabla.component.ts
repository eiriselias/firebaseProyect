import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
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
  usuEliminar:any;
  nuevoUsuario = new FormGroup({
    nombre: new FormControl(""),
    apellido: new FormControl(""),
    cargo: new FormControl(""),
    salario: new FormControl(0),
  })
  
  
  constructor(
    private usuariosTabla:ListaUsuariosService,
    private data:DataService
    ) {

   }

  ngOnInit(): void {
    //this.usuarios = this.usuariosTabla.usuarios;
    this.usuariosTabla.obtenerUsuarios().subscribe(registros => {
      this.usuarios = Object.values(registros);
      this.usuariosTabla.setUsuarios(this.usuarios);
      this.usuarios = this.usuariosTabla.usuarios;
    })
  }

  //decoradores del modal segun la opcion o boton  seleccionado
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
    this.usuEliminar = this.usuarios[this.id];
  }

  //acciones segun opcion o boton seleccionado
  accion(){
    if(this.opcion=="nuevo"){
      this.usuarios.push(this.nuevoUsuario.value);
      this.data.guardarUsuarios(this.usuarios);
      this.nuevoUsuario.reset();
    }
    if(this.opcion=="modificar"){
      this.usuarios[this.id] = this.nuevoUsuario.value;
      this.data.guardarUsuarios(this.usuarios);
      this.nuevoUsuario.reset();
    }
    if(this.opcion=="eliminar"){
      this.usuarios = this.usuarios.filter((us:number)=> us != this.usuarios[this.id])
      this.data.guardarUsuarios(this.usuarios)
    }
  }

}
