import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';

import { ModalController } from '@ionic/angular';
import { ModalsPage } from '../../modals/modals.page';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  public usuario:Usuario = new Usuario();

  constructor(public location: Location, public modalController: ModalController) { 
    this.usuario.nombre = "Juan Martínez";
    this.usuario.email = "juanmartinez@gmail.com";
    this.usuario.contrasenia = "1234567";
    this.usuario.fechaNacimiento="08/03/1988";
  }

  ngOnInit() {
  }

  goBack(){
    this.location.back();
  }

  async eliminarCuenta() {
    const modal = await this.modalController.create({
      component: ModalsPage,
      componentProps: {
        'titulo': 'Cuenta Eliminada',
        'mensaje': `La cuenta con nombre 
        ${this.usuario.nombre}
         se ha eliminado con éxito`,
        'textoBoton': 'Volver',
        'urlSalida' : '/configuracion'
      }
    });
    return await modal.present();
  }

}
