import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../../models/usuario';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

import { ModalController } from '@ionic/angular';
import { ModalsPage } from 'src/app/pages/modals/modals.page';
import { PerfilService } from 'src/app/shared/perfil.service';
@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
})
export class EditarPerfilPage implements OnInit {

  public nombreCabecera:string = "Editar perfil";
  public icono:boolean = true;
  public rutaAtras:any = "/configuracion/perfil";
  public usuario:Usuario = new Usuario();

  constructor(public location: Location, public modalController: ModalController, public perfilService:PerfilService) { 

  }

  ngOnInit() {
  }

  async onSubmit(form:NgForm)
  {
    console.log(form.value);
    this.usuario.nombre = form.value.nombreUsuario;
    this.usuario.email = form.value.email;
    // this.usuario.fechaNacimiento = form.value.fechaNacimiento;
    this.usuario.contrasenia = form.value.contrasenia;
    // this.usuario.confContrasenia=form.value.confContrasenia;

    this.putPerfil(this.usuario)

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

  putPerfil(usuario){
    
    
    this.perfilService.putPerfil(usuario).subscribe((data)=>{
      console.log(data); 
      console.log(usuario);
      console.log("Perfil editado perfectamente");
    });
  }
  goBack(){
    this.location.back();
  }

}
