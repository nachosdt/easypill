import { Injectable } from '@angular/core';
import { Contacto } from '../models/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  public contactos: Contacto[] = [
    {nombreContacto: "Juana Pérez Galdós", tlfContacto: 655234123, emailContacto: "juanapg@invent.es", notifEmail: true, notifSms: false, notificacionContacto: "email"},
    {nombreContacto: "Sara Rodriguez Esteban", tlfContacto: 788900111, emailContacto: "sara23@invent.es", notifEmail: true, notifSms: false, notificacionContacto: "email"},
    {nombreContacto: "Pedro García Robles", tlfContacto: 600121234, emailContacto: "pedro_garcia@invent.es", notifEmail: true, notifSms: false, notificacionContacto: "email"},
  ];
  constructor() { }

  // LLAMADA A LA API POST CONTACTO
  async postContacto(contacto: Contacto) {
    try {
      console.log(contacto);
      let url: string = "http://localhost:300/contacto";

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
}
