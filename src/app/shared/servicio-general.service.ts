import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServicioGeneralService {

  public diaSemana: number; // 0 = Lunes y 6 = Domingo
  public diaDelMes: number;
  public mes: string;
  public nombreUsuario: string = "Marta";
  public idUsuario: number;

  constructor() {
    let hoy = new Date();
    this.diaDelMes = hoy.getDate();
    this.diaSemana = hoy.getDay(); // 0 = Lunes y 6 = Domingo
    this.mes = hoy.toDateString().split(" ")[1];
  }
}
