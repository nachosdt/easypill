import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../../models/usuario';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
})
export class EditarPerfilPage implements OnInit {

  public usuario:Usuario = new Usuario()
  constructor(public location: Location) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm)
  {
    console.log(form.value);
    
    this.usuario.nombre = form.value.nombre;
    this.usuario.email = form.value.email;
    this.usuario.fechaNacimiento = form.value.fechaNacimiento;
    this.usuario.contrasenia = form.value.contrasenia;
    this.usuario.confContrasenia=form.value.confContrasenia;
  }
  goBack(){
    this.location.back();
  }

}
