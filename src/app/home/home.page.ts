import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  // MOSTRAR Y OCULTAR BOTONES DE CONFIRMACION

  mostarConfirmacion(confirmacion : HTMLDivElement) {
    confirmacion.classList.remove("desaparecer");
    confirmacion.classList.add("aparecer");
  }

  ocultarConfirmacion(confirmacion : HTMLDivElement) {
    confirmacion.classList.remove("aparecer");
    confirmacion.classList.add("desaparecer");
  }

  // AÑADIR MEDICAMENTO TOMADO: 
  // Importar el servicio medicamento
  // Seleccionar el medicamento tomado
  // Cambiarle el valor confirmacion a TRUE

}
