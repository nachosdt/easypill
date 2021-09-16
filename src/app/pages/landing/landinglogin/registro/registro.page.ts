import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../../models/usuario';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public usuario:Usuario = new Usuario()
  constructor(public location: Location) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm)
  {
    console.log(form.value);
    
    this.usuario.nombre = form.value.nombre;
    this.usuario.email = form.value.email;
    this.usuario.contrasenia = form.value.contrasenia;
    this.usuario.confContrasenia=form.value.confContrasenia;
  }
  goBack(){
    this.location.back();
  }
}
