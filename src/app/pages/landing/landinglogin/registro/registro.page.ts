import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Usuario } from '../../../../models/usuario';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

import { RegistroService } from 'src/app/shared/registro.service';
import { ModalController } from '@ionic/angular';
import { ModalsPage } from 'src/app/pages/modals/modals.page';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public nombreCabecera:string = "Registro";
  public icono:boolean = true;
  public rutaAtras:any = "/landing/landinglogin";
  public usuario:Usuario = new Usuario(); 
  
  @ViewChild("terminos", {read:ElementRef,static:true}) terminos:ElementRef;

  constructor(public location:Location, public modalController: ModalController, public registro:RegistroService) { }

  ngOnInit() {
  }

  async onSubmit(form:NgForm) {
    if (this.usuario.contrasenia != this.usuario.confContrasenia) {
      const modal = await this.modalController.create({
        component: ModalsPage,
        componentProps: {
          'titulo': 'La contraseña no coinciden',
          'mensaje': `Por favor, asegurese de que ambos campos coinciden.`,
          'textoBoton': 'Entendido',
          'urlSalida' : 'landing/landinglogin/registro'
        }
      });
      return await modal.present();
    } else if (this.terminos.nativeElement.checked===false) {
      const modal = await this.modalController.create({
        component: ModalsPage,
        componentProps: {
          'titulo': 'Falta aceptar los términos y condiciones',
          'mensaje': `Por favor, acepta los términos y condiciones y luego pulsa aceptar.`,
          'textoBoton': 'Entendido',
          'urlSalida' : 'landing/landinglogin/registro'
        }
      });
      return await modal.present();
    } else {
      this.usuario.nombre = form.value.nombreUsuario;
      this.usuario.email = form.value.email;
      this.usuario.fechaNacimiento = form.value.fechaNacimiento;
      this.usuario.contrasenia = form.value.contrasenia;
      this.usuario.confContrasenia=form.value.confContrasenia;

      this.registro.postRegistro(this.usuario)
      .subscribe(async (data)=>{
        if (!data.error) {
          const modal = await this.modalController.create({
            component: ModalsPage,
            componentProps: {
              'titulo': 'Acabas de crear una nueva cuenta',
              'mensaje': `¡Bienvenido, ${this.usuario.nombre}! Esperamos que EasyPill te sea de gran ayuda.`,
              'textoBoton': 'Continuar',
              'urlSalida' : 'landing/landinglogin/iniciar'
            }
          });
          return await modal.present();
        }
      });
    }  
    
  }  
}
