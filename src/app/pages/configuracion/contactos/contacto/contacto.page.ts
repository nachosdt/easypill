import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ContactosService } from '../../../../shared/contactos.service';
import { IonCheckbox } from '@ionic/angular';

import { ModalsPage } from 'src/app/pages/modals/modals.page';
import { ModalController } from '@ionic/angular';
import { Contacto } from 'src/app/models/contacto';
import { ServicioGeneralService } from '../../../../shared/servicio-general.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {

  public nombreCabecera:string = "Contacto del usuario";
  public icono:boolean = true;
  public rutaAtras:any = "/configuracion/contactos";
  public posicion: number;
  public contacto: Contacto;

  constructor(private location: Location,
    public contactosService: ContactosService,
    public modalController: ModalController,
    public serviciosGenerales: ServicioGeneralService) 
    {
      this.posicion = this.contactosService.posicionArr;
      this.contacto = this.contactosService.contactos[this.posicion];
    }

  goBack() {
    this.location.back();
  }

  ngOnInit() {  }

  async eliminarContacto() {
    let id: number = this.contacto.idContacto;
    this.contactosService.deleteContacto(id)
    .then ( async result => {
      if (result) {
        const modal = await this.modalController.create({
          component: ModalsPage,
          componentProps: {
            'titulo': 'Contacto Eliminado',
            'mensaje': `El contacto se ha eliminado con éxito`,
            'textoBoton': 'Ir a Contactos',
            'urlSalida' : '/configuracion/contactos'
          }
        });
        return await modal.present();
      } else {
        const modal = await this.modalController.create({
          component: ModalsPage,
          componentProps: {
            'titulo': 'Error al eliminar el contacto',
            'mensaje': `No se pudo eliminar el contacto. Por favor, inténtalo de nuevo más tarde.`,
            'textoBoton': 'Ir a Contactos',
            'urlSalida' : '/configuracion/contactos'
          }
        });
        return await modal.present();
      }
      
    })
    .catch (error => {
      console.log(error);
    })   
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
      this.contacto.nombreContacto = nombre.value;
      let numero: string = tlf.value;
      let numero1: number = parseFloat(numero);
      this.contacto.tlfContacto = numero1;
      this.contacto.emailContacto = email.value;
      this.contacto.notifEmail = notifEmail.checked;
      this.contacto.notifSms = notifSms.checked;
      this.contacto.idUsuario = this.serviciosGenerales.idUsuario;
      if (this.contacto.notifSms && this.contacto.notifEmail) {
        this.contacto.notificacionContacto = "ambos";
      }
      else if (!this.contacto.notifSms && this.contacto.notifEmail) {
        this.contacto.notificacionContacto = "email";
      }
      else if(this.contacto.notifSms && !this.contacto.notifEmail) {
        this.contacto.notificacionContacto = "sms";
      }
      else {
        this.contacto.notificacionContacto = "ninguno";
      }
      this.contactosService.putContacto(this.contacto)
      .then ( async result => {
        if (result) {
          const modal = await this.modalController.create({
            component: ModalsPage,
            componentProps: {
              'titulo': 'Contacto actualizado corréctamente',
              'mensaje': `Los datos del contacto ${nombre.value} se han guardado con éxito`,
              'textoBoton': 'Ir a Contactos',
              'urlSalida' : '/configuracion/contactos'
            }
          });
          return await modal.present();
        } else {
          const modal = await this.modalController.create({
            component: ModalsPage,
            componentProps: {
              'titulo': 'Error al actualizar el contacto',
              'mensaje': `Los datos del contacto ${nombre.value} no se han podido actualizar. Por favor, 
              inténtalo de nuevo más tarde.`,
              'textoBoton': 'Ir a Contactos',
              'urlSalida' : '/configuracion/contactos'
            }
          });
          return await modal.present();
        }
        
      })
      .catch (error => {
        console.log(error);
      })   

      this.ocultarBotones(eliminar, cancelar, editar, guardar);      
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
