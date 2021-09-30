import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ContactosService } from '../../../shared/contactos.service';
import { Contacto } from '../../../models/contacto';
import { ServicioGeneralService } from 'src/app/shared/servicio-general.service';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage implements OnInit {

  public nombreCabecera: string = "Contactos del usuario";
  public icono: boolean = true;
  public rutaAtras: string;
  public contactos: Contacto[] = [];
  public contacto !: Contacto;

  @ViewChild("contenedor", { read: ElementRef }) private contenedor: ElementRef;

  constructor(public contactoService: ContactosService, public servicioGeneral: ServicioGeneralService) { }

  ngOnInit() {
    if (this.servicioGeneral.primeraVezServicio == true) {

      this.rutaAtras = "/home";
      this.servicioGeneral.primeraVezServicio = false;

    } else {
      this.rutaAtras = "/configuracion"

    }
  }

  ionViewWillEnter() {
    this.contactos = this.contactoService.contactos;
    if (this.contactos.length < 6) {
      this.contenedor.nativeElement.setAttribute("style", "--overflow: hidden;");
    } else {
      this.contenedor.nativeElement.setAttribute("style", "--overflow: auto;");
    }
  }

  // POSICION DEL CONTACTO SELECCIONADO EN EL ARRAY
  guardarPosicion(posicion: number) {
    this.contactoService.posicionArr = posicion;
  }

}
