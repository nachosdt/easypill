import { Component, OnInit } from '@angular/core';
import { ContactosService } from '../../../shared/contactos.service';
import { Contacto } from '../../../models/contacto';


@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage implements OnInit {

  public nombreCabecera:string = "Contactos del usuario";
  public icono:boolean = true;
  public rutaAtras:any = "/configuracion";
  public contactos: Contacto[] = [];
  public contacto !: Contacto;  

  constructor(public contactoService: ContactosService) {}

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.contactoService.getContacto()
    .then(result => {      
      this.contactos = result;
    })
    .catch(error => {
      console.log(error);
    });
  }

  // POSICION DEL CONTACTO SELECCIONADO EN EL ARRAY
  guardarPosicion(posicion: number) {
    this.contactoService.posicionArr = posicion;
  }

}
