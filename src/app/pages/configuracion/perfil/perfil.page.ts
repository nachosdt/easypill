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
      this.usuario.nombre = respuesta.datos[0].nombre;
      this.usuario.email = respuesta.datos[0].email;
      this.usuario.contrasenia = respuesta.datos[0].contrasenia;
    });
  }

  public goBack():void {
    this.location.back();
  }

  public getPerfil(id:number):void {
    this.perfilService.getPerfil(id).subscribe((data:Usuario)=>{
      this.usuario = data[0];
    })
  }

    async deletePerfil(id:number){
    console.log("Ha eliminado el perfil");
     this.perfilService.deletePerfil(id).subscribe(async (data)=>{
    console.log(data);
      this.informacion = data
      console.log(this.informacion.datos);
      
    if (this.informacion.datos !== {}){
      const modal = await this.modalController.create({
        component: ModalsPage,
        componentProps: {
          'titulo': 'Cuenta Eliminada',
          'mensaje': `La cuenta con nombre 
          ${this.usuario.nombre}
           se ha eliminado con éxito`,
          'textoBoton': 'Volver',
          'urlSalida' : '/configuracion',
        }
      });
      return await modal.present();
    }
  })
}

  async eliminarCuenta() {
    
    // const modal = await this.modalController.create({
    //   component: ModalsPage,
    //   componentProps: {
    //     'titulo': 'Cuenta Eliminada',
    //     'mensaje': `La cuenta con nombre 
    //     ${this.usuario.nombre}
    //      se ha eliminado con éxito`,
    //     'textoBoton': 'Volver',
    //     'urlSalida' : '/configuracion',
    //   }
    // });
    // return await modal.present();
  }

}
