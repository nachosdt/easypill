import { Component, OnInit } from '@angular/core';
import { ContactosService } from '../../../shared/contactos.service';
import { Contacto } from '../../../models/contacto';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage implements OnInit {
  public contactos : Contacto[];
  public contacto !: Contacto;

  constructor(public contactoService: ContactosService) { 
    if(this.contactoService.contactos = []) {
      this.contactoService.getContacto()
      .then (result => {
        return this.contactos = result;
      })
      .catch (error => {
        console.log(error);
      })
    }   
  }

  ngOnInit() {
  }

  // POSICION DEL CONTACTO SELECCIONADO EN EL ARRAY
  guardarPosicion(posicion: number) {
    this.contactoService.posicionArr = posicion;
  }

}
