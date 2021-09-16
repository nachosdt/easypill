import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-iniciar',
  templateUrl: './iniciar.page.html',
  styleUrls: ['./iniciar.page.scss'],
})
export class IniciarPage implements OnInit {
  public usuario:Usuario=new Usuario()
  constructor(public location:Location) { }

  ngOnInit(){
  }
  onSubmit(form:NgForm){
    this.usuario.email=form.value.email
    this.usuario.contrasenia=form.value.contrasenia
    
  }
  goBack(){
    this.location.back();
  }
}
