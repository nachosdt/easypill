import { Injectable } from '@angular/core';
import { Contacto } from '../models/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  public contactos: Contacto[]
   = [
    {nombreContacto: "Juana Peréz Galdós", tlfContacto: 655234123, emailContacto: "juanapg@invent.es", notifEmail: true, notifSms: false},
    {nombreContacto: "Sara Rodriguez Esteban", tlfContacto: 788900111, emailContacto: "sara23@invent.es", notifEmail: true, notifSms: false},
    {nombreContacto: "Pedro García Robles", tlfContacto: 600121234, emailContacto: "pedro_garcia@invent.es", notifEmail: true, notifSms: false},
  ];
  constructor() { }
}
