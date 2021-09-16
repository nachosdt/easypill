import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contacto } from '../../../../models/contacto';
import { ContactosService } from '../../../../shared/contactos.service';
import { Location } from '@angular/common';

import { ModalController } from '@ionic/angular';
import { Modal1Page } from 'src/app/pages/modals/modal1/modal1.page';

@Component({
  selector: 'app-anadir-contacto',
  templateUrl: './anadir-contacto.page.html',
  styleUrls: ['./anadir-contacto.page.scss'],
})
export class AnadirContactoPage implements OnInit {

  public contacto : Contacto = new Contacto();

  constructor(public contactoService: ContactosService, public location: Location, public modalController: ModalController) { }

  async onSubmit(form:NgForm) {

    this.contacto.nombreContacto= form.value.nombreContacto;
    this.contacto.tlfContacto = form.value.tlfContacto;
    this.contacto.emailContacto = form.value.emailContacto;
    this.contacto.notifEmail = form.value.notifEmail;
    this.contacto.notifSms = form.value.notifSms;
    this.contactoService.contactos.push(this.contacto);

    const modal = await this.modalController.create({
      component: Modal1Page,
    });
    return await modal.present();
  }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

}
