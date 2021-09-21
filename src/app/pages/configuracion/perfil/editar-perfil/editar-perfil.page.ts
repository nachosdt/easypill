import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../../models/usuario';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

import { ModalController } from '@ionic/angular';
import { ModalsPage } from 'src/app/pages/modals/modals.page';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
})
export class EditarPerfilPage implements OnInit {

  public usuario:Usuario = new Usuario()


  constructor(public location: Location, public modalController: ModalController) { 


  }

  ngOnInit() {
  }

  async onSubmit(form:NgForm)
  {
    console.log(form.value);
    
    this.usuario.nombre = form.value.nombreUsuario;
    this.usuario.email = form.value.email;
    this.usuario.fechaNacimiento = form.value.fechaNacimiento;
    this.usuario.contrasenia = form.value.contrasenia;
    this.usuario.confContrasenia=form.value.confContrasenia;

    const modal = await this.modalController.create({
      component: ModalsPage,
      componentProps: {
        'titulo': 'Perfil Modificado',
        'mensaje': `La cuenta con nombre 
        ${this.usuario.nombre}
         se ha modificado correctamente`,
        'textoBoton': 'Continuar',
        'urlSalida' : '/configuracion'
      }
    });
    return await modal.present();
  }
  goBack(){
    this.location.back();
  }

}
