import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contacto } from '../../../../models/contacto';
import { ContactosService } from '../../../../shared/contactos.service';
import { Location } from '@angular/common';

import { ModalController, IonCheckbox } from '@ionic/angular';
import { ModalsPage } from 'src/app/pages/modals/modals.page';
import { ServicioGeneralService } from '../../../../shared/servicio-general.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anadir-contacto',
  templateUrl: './anadir-contacto.page.html',
  styleUrls: ['./anadir-contacto.page.scss'],
})
export class AnadirContactoPage implements OnInit {

  public nombreCabecera:string = "Añadir contacto";
  public icono:boolean = true;
  public rutaAtras:any = "/configuracion/contactos";

  public contacto: Contacto = new Contacto();
  public checkedEmail: boolean;
  public checkedSms: boolean;
  public yaEstoyLogueado: boolean = false

  constructor(public contactoService: ContactosService,
    public servicioGeneralService: ServicioGeneralService,
    public location: Location,
    public modalController: ModalController,
    public router: Router) { }

  async onSubmit(form: NgForm) {

    this.contacto.nombreContacto = form.value.nombreContacto;
    this.contacto.tlfContacto = form.value.tlfContacto;
    this.contacto.emailContacto = form.value.emailContacto;
    this.contacto.notifEmail = this.checkedEmail;
    this.contacto.notifSms = this.checkedSms;
    this.contacto.idUsuario = this.servicioGeneralService.idUsuario;
    if (this.contacto.notifEmail && this.contacto.notifSms) {
      this.contacto.notificacionContacto = "ambos";
    }
    else if (this.contacto.notifEmail && !this.contacto.notifSms) {
      this.contacto.notificacionContacto = "email";
    }
    else if (!this.contacto.notifEmail && this.contacto.notifSms) {
      this.contacto.notificacionContacto = "sms";
    }
    else {
      this.contacto.notificacionContacto = "ninguno";
    }
    console.log(this.contacto);
    
    this.contactoService.postContacto(this.contacto)
    .then(async (respuesta)=>{
      if (respuesta) {
        this.contactoService.contactos.push(this.contacto);
        const modal = await this.modalController.create({
          component: ModalsPage,
          componentProps: {
            'titulo': 'Nuevo Contacto Añadido',
            'mensaje': '¡Has añadido un nuevo contacto a tu lista de contactos!',
            'textoBoton': 'Ir a Contactos',
            'urlSalida': '/configuracion/contactos'
          }
        });
        return await modal.present();
      } else {
        const modal = await this.modalController.create({
          component: ModalsPage,
          componentProps: {
            'titulo': 'Error al crear el nuevo contacto',
            'mensaje': 'Se ha producido un error al crear el nuevo  contacto. Por favor, inténtalo de nuvo más tarde',
            'textoBoton': 'Ir a Contactos',
            'urlSalida': '/configuracion/contactos'
          }
        });
        return await modal.present();
      }
    })
    .catch((error) =>{
      console.log(error);
    });

    
  }

  ngOnInit() {
  }

  bntCancelar() {
    console.log(this.servicioGeneralService.primeraVezServicio);
    if (this.servicioGeneralService.primeraVezServicio == true) {

      this.router.navigate(["/home"])
      this.servicioGeneralService.primeraVezServicio = this.yaEstoyLogueado
    }

    // this.servicioGeneralService.primeraVezServicio == false
    // console.log(this.servicioGeneralService.primeraVezServicio);

  }

  goBack() {
    this.location.back();
  }

  cambiarCheckboxEmail(event: IonCheckbox) {
    this.checkedEmail = event.checked;
  }
  cambiarCheckboxSms(event: IonCheckbox) {
    this.checkedSms = event.checked;
  }
}
