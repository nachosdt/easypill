import { Component } from '@angular/core';

import { ServicioGeneralService } from '../shared/servicio-general.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  public nombreUsuario:string;
  public diaDelMes:number;
  public diaDeLaSemana:string;
  public mes:string;
  public dias:string[] = ["Domingo","Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

  constructor(private servicioGeneral:ServicioGeneralService) {
    this.nombreUsuario = servicioGeneral.nombreUsuario;
    this.diaDelMes = servicioGeneral.diaDelMes;
    this.mes = servicioGeneral.mes;
    this.diaDeLaSemana = this.dias[servicioGeneral.diaSemana];
  }

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
