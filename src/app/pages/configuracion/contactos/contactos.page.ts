import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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

  @ViewChild("contenedor",{ read: ElementRef }) private contenedor: ElementRef;

  constructor(public contactoService: ContactosService) {}

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.contactos = this.contactoService.contactos;
    if (this.contactos.length < 6) {
      this.contenedor.nativeElement.setAttribute("style","--overflow: hidden;");
    } else {
      this.contenedor.nativeElement.setAttribute("style","--overflow: auto;");
    }    
  }

  // POSICION DEL CONTACTO SELECCIONADO EN EL ARRAY
  guardarPosicion(posicion: number) {
    this.contactoService.posicionArr = posicion;
  }

}
