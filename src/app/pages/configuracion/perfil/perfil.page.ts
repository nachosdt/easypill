import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { PerfilService } from 'src/app/shared/perfil.service';
import { ModalController } from '@ionic/angular';
import { ModalsPage } from '../../modals/modals.page';
import { ServicioGeneralService } from 'src/app/shared/servicio-general.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  public nombreCabecera:string = "Perfil del usuario";
  public icono:boolean = true;
  public rutaAtras:any = "/configuracion";

  public usuario:Usuario = new Usuario();
  public informacion:any = {};

  constructor(public location: Location, public modalController: ModalController, 
    public perfilService:PerfilService, private servicioGeneral:ServicioGeneralService) { 
    
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.perfilService.getPerfil(this.servicioGeneral.idUsuario)
    .subscribe((respuesta)=>{
      console.log(respuesta);
      this.perfilService.usuario = respuesta.datos[0];
      this.perfilService.usuario.fechaNacimiento = new Date(this.perfilService.usuario.fechaNacimiento).toUTCString().slice(5,16);
      this.usuario = this.perfilService.usuario;
    });
  }

  public goBack():void {
    this.location.back();
  }

  // public getPerfil(id:number):void {
  //   this.perfilService.getPerfil(id).subscribe((data:Usuario)=>{
  //     this.usuario = data[0];
  //   });
  // }

  public deletePerfil(id:number) {    
    this.perfilService.deletePerfil(id).subscribe(async (data)=>{    
      if (data.error) {
        const modal = await this.modalController.create({
          component: ModalsPage,
          componentProps: {
            'titulo': 'Error al eliminar la cuenta',
            'mensaje': `No se ha podido eliminar la cuenta. Por favor, inténtelo de nnuevo más tarde`,
            'textoBoton': 'Volver',
            'urlSalida' : '/configuracion',
          }
        });
        return await modal.present();
      } else {
        const modal = await this.modalController.create({
          component: ModalsPage,
          componentProps: {
            'titulo': 'Cuenta de usuario eliminada',
            'mensaje': `La cuenta con nombre 
            ${this.usuario.nombre}
             ha sido eliminada. Esperamos volver a verle pronto.`,
            'textoBoton': 'Volver',
            'urlSalida' : '/landing',
          }
        });
        return await modal.present();
      }
    });
  }  
}
