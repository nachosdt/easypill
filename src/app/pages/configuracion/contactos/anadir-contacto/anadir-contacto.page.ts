import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contacto } from '../../../../models/contacto';
import { ContactosService } from '../../../../shared/contactos.service';
import { Location } from '@angular/common';

import { ModalController, IonCheckbox } from '@ionic/angular';
import { ModalsPage } from 'src/app/pages/modals/modals.page';

@Component({
  selector: 'app-anadir-contacto',
  templateUrl: './anadir-contacto.page.html',
  styleUrls: ['./anadir-contacto.page.scss'],
})
export class AnadirContactoPage implements OnInit {

  public contacto : Contacto = new Contacto();
  public checkedEmail: boolean;
  public checkedSms: boolean;

  constructor(public contactoService: ContactosService, public location: Location, public modalController: ModalController) { }

  async onSubmit(form:NgForm) {

    this.contacto.nombreContacto= form.value.nombreContacto;
    this.contacto.tlfContacto = form.value.tlfContacto;
    this.contacto.emailContacto = form.value.emailContacto;
    this.contacto.notifEmail = this.checkedEmail;
    this.contacto.notifSms = this.checkedSms;
    if (this.contacto.notifEmail && this.contacto.notifSms) {
      this.contacto.notificacionContacto = "ambos";
    }
    else if (this.contacto.notifEmail && !this.contacto.notifSms) {
      this.contacto.notificacionContacto = "email";
    }
    else if(!this.contacto.notifEmail && this.contacto.notifSms) {
      this.contacto.notificacionContacto = "sms";
    }
    else {
      this.contacto.notificacionContacto = "ninguno";
    }
    this.contactoService.contactos.push(this.contacto);
    this.contactoService.postContacto(this.contacto);

    const modal = await this.modalController.create({
      component: ModalsPage,
      componentProps: {
        'titulo': 'Nuevo Contacto Añadido',
        'mensaje': '¡Has añadido un nuevo contacto a tu lista de contactos!',
        'textoBoton': 'Ir a Contactos',
        'urlSalida' : '/configuracion/contactos'
      }
    });
    return await modal.present();
  }

  ngOnInit() {
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
