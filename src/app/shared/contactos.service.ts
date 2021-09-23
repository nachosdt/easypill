import { Injectable } from '@angular/core';
import { Contacto } from '../models/contacto';
import { ServicioGeneralService } from './servicio-general.service';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  public contactos: Contacto[] = [
    // {nombreContacto: "Juana Pérez Galdós", tlfContacto: 655234123, emailContacto: "juanapg@invent.es", notifEmail: true, notifSms: false, notificacionContacto: "email"},
    // {nombreContacto: "Sara Rodriguez Esteban", tlfContacto: 788900111, emailContacto: "sara23@invent.es", notifEmail: true, notifSms: false, notificacionContacto: "email"},
    // {nombreContacto: "Pedro García Robles", tlfContacto: 600121234, emailContacto: "pedro_garcia@invent.es", notifEmail: true, notifSms: false, notificacionContacto: "email"},
  ];
  public posicionArr: number;
  constructor(public servicioGeneral : ServicioGeneralService) { }

  // LLAMADA A LA API POST CONTACTO
  async postContacto(contacto: Contacto) {
    try {
      console.log(contacto);
      let url: string = "http://localhost:4000/contacto";

      let param: any =
      {
          headers: {"Content-type": "application/json; chasert= UTF-8"},
          body: JSON.stringify(contacto),
          method: "POST"
      }

      let data = await fetch(url, param);
      let result = await data.json();

      console.log(result);
    }
    catch(error) 
    {
        console.log(error);
    }
  }

  // LLAMADA A LA API GET CONTACTOS
  async getContacto() {
    if (this.contactos = []) {
      try {
        let id: number = this.servicioGeneral.idUsuario;
        let url: string = `http://localhost:4000/contacto?id=7`;

        let param: any =
        {
            headers: {"Content-type": "application/json; chasert= UTF-8"},
            method: "GET"
        }

        let data = await fetch(url, param);
        let result = await data.json();

        for (let i in result.datos) {
          let newContact: Contacto = new Contacto ();
          newContact.nombreContacto = result.datos[i].alias;
          newContact.tlfContacto = result.datos[i].telefono;
          newContact.emailContacto = result.datos[i].email;
          newContact.posicionArray = parseFloat(i);
          newContact.idContacto = result.datos[i].id_contacto;
          newContact.idUsuario = id;
          if (result.datos[i].notificacion == "ambos") {
            newContact.notifEmail = true;
            newContact.notifSms = true;
          }
          else if (result.datos[i].notificacion == "email") {
            newContact.notifEmail = true;
            newContact.notifSms = false;
          }
          else if (result.datos[i].notificacion == "sms") {
            newContact.notifEmail = false;
            newContact.notifSms = true;
          }
          else {
              newContact.notifEmail = false;
              newContact.notifSms = false;
          }
          this.contactos.push(newContact);
        }
        return this.contactos;
      }
      catch(error) 
      {
          console.log(error);
      }
    }
  }

  // LLAMADA A LA API PUT CONTACTOS
  async putContacto(contacto: Contacto) {
    try {
      console.log(contacto);
      let url: string = "http://localhost:4000/contacto";

      let param: any =
      {
          headers: {"Content-type": "application/json; chasert= UTF-8"},
          body: JSON.stringify(contacto),
          method: "PUT"
      }

      let data = await fetch(url, param);
      let result = await data.json();

      console.log(result);
    }
    catch(error) 
    {
        console.log(error);
    }
  }

  // LLAMADA A LA API DELETE CONTACTO
  async deleteContacto(idContacto: number) {
    let body1 = {"id": idContacto};
    try {
      let url: string = "http://localhost:4000/contacto";

      let param: any =
      {
          headers: {"Content-type": "application/json; chasert= UTF-8"},
          body: JSON.stringify(body1),
          method: "DELETE"
      }

      let data = await fetch(url, param);
      let result = await data.json();

      console.log(result);
    }
    catch(error) 
    {
        console.log(error);
    }
  }
}
