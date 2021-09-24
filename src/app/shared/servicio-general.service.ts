import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ServicioGeneralService {

  public diaSemana: number; // 0 = Lunes y 6 = Domingo
  public diaDelMes: number;
  public mes: string;
  public nombreUsuario: string = "Marta";
  public idUsuario: number = 7;
  public primeraVezServicio: boolean = false

  constructor() {
    let hoy = new Date();
    this.diaDelMes = hoy.getDate();
    this.diaSemana = hoy.getDay(); // 0 = Lunes y 6 = Domingo
    this.mes = hoy.toDateString().split(" ")[1];

  }

  public async getTomasHoy() {
    let url = `https://api-easypill.herokuapp.com/tomashoy?id=${this.idUsuario}`;
    let param = {
      headers: { "Content-Type": "application/json; charset = UTF-8" },
      method: "GET"
    };
    try {
      let data = await fetch(url, param);
      let resultBruto = await data.json();
      let tomas = resultBruto.datos;
      console.log("Nº tomas de hoy:", tomas.length);
      return tomas;
    } catch (error) {
      console.log(error);
    }
  }

  public async actualizarTomas(idtomas: number, estatus: string) {
    let url = `https://api-easypill.herokuapp.com/tomas`;
    let param = {
      headers: { "Content-Type": "application/json; charset = UTF-8" },
      method: "PUT",
      body: JSON.stringify({ "idtomas": idtomas, "estatus": estatus })
    };
    try {
      let data = await fetch(url, param);
      let resultBruto = await data.json();
      let respuesta = resultBruto.datos;
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  }

}
