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
    this.contactos = contactoService.contactos;
  }

  ngOnInit() {
  }

}