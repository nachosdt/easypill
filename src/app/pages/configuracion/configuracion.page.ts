import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {

  public nombreCabecera:string = "Configuración";
  public rutaAtras:string = "/home";
  public icono:boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
