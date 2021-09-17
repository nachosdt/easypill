import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ContactosService } from '../../../../shared/contactos.service';
import { IonCheckbox } from '@ionic/angular';

import { Modal2Page } from 'src/app/pages/modals/modal2/modal2.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {

  // @ViewChild 

  constructor(private location: Location,
    public contactosService: ContactosService,
    public modalController: ModalController) { }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
    // nombre.value = this.contactosService.contactos[0].nombreContacto;
  }

  eliminarContacto() {
    this.contactosService.contactos.splice(0,1);
    console.log(this.contactosService.contactos)
  }

  cancel(nombre: HTMLInputElement, tlf: HTMLInputElement,
    email: HTMLInputElement, notifEmail: IonCheckbox,
    notifSms: IonCheckbox, eliminar: HTMLButtonElement, 
    cancelar: HTMLButtonElement, editar: HTMLButtonElement,
    guardar: HTMLButtonElement) {
    nombre.value = this.contactosService.contactos[0].nombreContacto;
    let numero : string = this.contactosService.contactos[0].tlfContacto.toString();
    tlf.value = numero;
    email.value = this.contactosService.contactos[0].emailContacto;
    notifEmail.checked = this.contactosService.contactos[0].notifEmail;
    notifSms.checked = this.contactosService.contactos[0].notifSms;

    this.ocultarBotones(eliminar, cancelar, editar, guardar)
  }

  editarContacto(nombre: HTMLInputElement, tlf: HTMLInputElement,
    email: HTMLInputElement, notifEmail: IonCheckbox,
    notifSms: IonCheckbox, eliminar: HTMLButtonElement, 
    cancelar: HTMLButtonElement, editar: HTMLButtonElement,
    guardar: HTMLButtonElement) {
      nombre.readOnly = false;
      tlf.readOnly = false;
      email.readOnly = false;
      notifEmail.disabled = false;
      notifSms.disabled = false;
      this.mostarBotones(eliminar, cancelar, editar, guardar);      
  }

  async guardarContacto(nombre: HTMLInputElement, tlf: HTMLInputElement,
    email: HTMLInputElement, notifEmail: IonCheckbox,
    notifSms: IonCheckbox, eliminar: HTMLButtonElement, 
    cancelar: HTMLButtonElement, editar: HTMLButtonElement,
    guardar: HTMLButtonElement) {
      this.contactosService.contactos[0].nombreContacto = nombre.value;
      let numero: string = tlf.value;
      let numero1: number = parseFloat(numero);
      this.contactosService.contactos[0].tlfContacto = numero1;
      this.contactosService.contactos[0].emailContacto = email.value;
      this.contactosService.contactos[0].notifEmail = notifEmail.checked;
      this.contactosService.contactos[0].notifSms = notifSms.checked;

      this.ocultarBotones(eliminar, cancelar, editar, guardar)
      console.log(this.contactosService.contactos[0]);

      const modal = await this.modalController.create({
        component: Modal2Page,

      // const modal = await this.modalController.create({
      //   component: Modal1Page,
      });
      return await modal.present();
    }

  mostarBotones(eliminar: HTMLButtonElement, 
    cancelar: HTMLButtonElement, editar: HTMLButtonElement,
    guardar: HTMLButtonElement) {
    eliminar.classList.remove("aparecer");
    eliminar.classList.add("desaparecer");
    cancelar.classList.remove("desaparecer");
    cancelar.classList.add("aparecer");
    editar.classList.remove("aparecer");
    editar.classList.add("desaparecer");
    guardar.classList.remove("desaparecer");
    guardar.classList.add("aparecer");
  }

  ocultarBotones(eliminar: HTMLButtonElement, 
    cancelar: HTMLButtonElement, editar: HTMLButtonElement,
    guardar: HTMLButtonElement) {
      eliminar.classList.remove("desaparecer");
      eliminar.classList.add("aparecer");
      cancelar.classList.remove("aparecer");
      cancelar.classList.add("desaparecer");
      editar.classList.remove("desaparecer");
      editar.classList.add("aparecer");
      guardar.classList.remove("aparecer");
      guardar.classList.add("desaparecer");
    }

}
