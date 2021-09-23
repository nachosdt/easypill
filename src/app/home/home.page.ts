import { Component, OnInit } from '@angular/core';

import { ServicioGeneralService } from '../shared/servicio-general.service';
import { MedicamentosService } from '../shared/medicamentos.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  public idUsuario: number;
  public nombreUsuario: string;
  public diaDelMes: number;
  public diaDeLaSemana: string;
  public mes: string;
  public dias: string[] = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
  public tomasDeHoyFuturas: any[] = [];
  public tomasDeHoyPasadas: any[] = [];
  public tomasDeHoyPendientes: any[] = [];
  public tomasDeHoyTomadas: any[] = [];
  public tomasDeHoyOlvidadas: any[] = [];


  constructor(private servicioGeneral: ServicioGeneralService, private servicioMedicamento: MedicamentosService) {
    this.nombreUsuario = servicioGeneral.nombreUsuario;
    this.diaDelMes = servicioGeneral.diaDelMes;
    this.mes = servicioGeneral.mes;
    this.diaDeLaSemana = this.dias[servicioGeneral.diaSemana];


  }

  ngOnInit() {
    let tomas = this.servicioGeneral.getTomasHoy();
    tomas.then((resultado) => {
      let ahora = new Date();
      for (let i = 0; i < resultado.length; i++) {
        if (new Date(resultado[i].fecha) < ahora) {
          this.tomasDeHoyPasadas.push(resultado[i]);
        } else {
          this.tomasDeHoyFuturas.push(resultado[i]);
        }
      }
      this.tomasDeHoyPendientes = this.tomasDeHoyPasadas.filter((toma) => {
        return toma.estatus === "pendiente";
      });
      this.tomasDeHoyTomadas = this.tomasDeHoyPasadas.filter((toma) => {
        return toma.estatus === "tomada";
      });
      this.tomasDeHoyOlvidadas = this.tomasDeHoyPasadas.filter((toma) => {
        return toma.estatus === "olvidada";
      });
      console.log("Pasadas:", this.tomasDeHoyPasadas);
      console.log("Futuras:", this.tomasDeHoyFuturas);
    })
      .catch((error) => {
        console.log(error);
      });
  }

  public convertirHora(hora:string):string {
    return hora.slice(10,15);
  }

  public hoyOManiana(hora: string) {
    let resultado: string;
    if (this.diaDelMes === new Date(hora).getDate()) {
      resultado = "Hoy";
    } else {
      resultado = "Mañana";
    }
    return resultado;
  }

  // MOSTRAR Y OCULTAR BOTONES DE CONFIRMACION

  mostarConfirmacion(botones: HTMLDivElement) {
    botones.classList.remove("desaparecer");
    botones.classList.add("aparecer");
  }

  tomada(indice: number) {
    let registro = this.tomasDeHoyPendientes[indice];
    this.tomasDeHoyPendientes.splice(indice, 1);
    this.tomasDeHoyTomadas.push(registro);
    this.servicioGeneral.actualizarTomas(registro.idtomas, "tomada");
  }

  olvidada(indice: number) {
    let registro = this.tomasDeHoyPendientes[indice];
    this.tomasDeHoyPendientes.splice(indice, 1);
    this.tomasDeHoyOlvidadas.push(registro);
    this.servicioGeneral.actualizarTomas(registro.idtomas, "olvidada");
  }

}
