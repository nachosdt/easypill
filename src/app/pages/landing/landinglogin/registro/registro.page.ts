import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../../models/usuario';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

import { ModalController } from '@ionic/angular';
import { ModalsPage } from 'src/app/pages/modals/modals.page';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public usuario:Usuario = new Usuario()
  constructor(public location:Location, public modalController: ModalController) { }

  ngOnInit() {
  }

  async onSubmit(form:NgForm)
  {
    console.log(form.value);
    
    this.usuario.nombre = form.value.nombre;
    this.usuario.email = form.value.email;
    this.usuario.fechaNacimiento = form.value.fechaNacimiento;
    this.usuario.contrasenia = form.value.contrasenia;
    this.usuario.confContrasenia=form.value.confContrasenia;

    const modal = await this.modalController.create({
      component: ModalsPage,
    });
    return await modal.present();
  }
  goBack(){
    this.location.back();
    console.log(this.usuario);
  }
}
