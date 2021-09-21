import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

import { ModalController } from '@ionic/angular';
import { ModalsPage } from 'src/app/pages/modals/modals.page';

@Component({
  selector: 'app-iniciar',
  templateUrl: './iniciar.page.html',
  styleUrls: ['./iniciar.page.scss'],
})
export class IniciarPage implements OnInit {
  public usuario:Usuario=new Usuario()
  constructor(public location:Location,public modalController: ModalController) { }

  ngOnInit(){
  }
  onSubmit(form:NgForm){
    this.usuario.email=form.value.email;
    this.usuario.contrasenia=form.value.contrasenia;  
  }

  async recuperarPass(){

    const modal = await this.modalController.create({
      component: ModalsPage,
      componentProps: {
        'titulo': 'Recuperar contraseña',
        'mensaje': `En breve te enviaremos un email a ${this.usuario.email}`,
        'textoBoton': 'Continuar',
        'urlSalida' : 'landing'
      }
    });
    return await modal.present();

  }
  
  goBack(){
    this.location.back();
  }
}
