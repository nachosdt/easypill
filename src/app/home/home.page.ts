import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { ServicioGeneralService } from '../shared/servicio-general.service';
import { MedicamentosService } from '../shared/medicamentos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  @ViewChild('irAconfiguracion') irAconfiguracion: ElementRef;
  
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
  public casoVacio:boolean;

  public iconoConfiguracion: string = "quietoIcon";
  @ViewChild("contenedor",{ read: ElementRef }) private contenedor: ElementRef;


  constructor(private servicioGeneral: ServicioGeneralService, private servicioMedicamento: MedicamentosService, public router: Router) {
    this.nombreUsuario = servicioGeneral.nombreUsuario.split(" ")[0];
    this.diaDelMes = servicioGeneral.diaDelMes;
    this.mes = servicioGeneral.mes;
    this.diaDeLaSemana = this.dias[servicioGeneral.diaSemana];
  }

  ngOnInit() { }

  ionViewWillEnter() {       
    this.tomasDeHoyFuturas = [];
    this.tomasDeHoyPasadas = [];
    this.tomasDeHoyOlvidadas = [];
    this.tomasDeHoyPendientes = [];
    this.tomasDeHoyTomadas = [];
    let tomas = this.servicioGeneral.tomasDeHoy;    
    if (tomas.length===0) {
      this.casoVacio = true;
      this.contenedor.nativeElement.setAttribute("style","--overflow: hidden;");
    } else {
      this.casoVacio = false;
      if (tomas.length > 2) {this.contenedor.nativeElement.setAttribute("style","--overflow: auto;")}
      else {this.contenedor.nativeElement.setAttribute("style","--overflow: hidden;");}
      let ahora = new Date();
      for (let i = 0; i < tomas.length; i++) {
        if (new Date(tomas[i].fecha) < ahora) {
          this.tomasDeHoyPasadas.push(tomas[i]);
        } else {
          this.tomasDeHoyFuturas.push(tomas[i]);
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
      // console.log("Pasadas:", this.tomasDeHoyPasadas);
      // console.log("Futuras:", this.tomasDeHoyFuturas);
    }    
  }  

  public configpage() {
    this.iconoConfiguracion = "config-icon"
    setTimeout(() => {
      this.iconoConfiguracion = "quietoIcon"
      this.router.navigate(["/configuracion"])
      //   this.irAconfiguracion.nativeElement.click();
    }, 400);
  }


  public convertirHora(hora: string): string {
    return hora.split(" ")[1].slice(0,5);
  }

  public hoyOManiana(hora: string) {
    let resultado: string;
    if (this.diaDelMes === new Date(hora).getDate()) {
      resultado = "Hoy";
    } else {
      resultado = "Ma??ana";
    }
    return resultado;
  }

  // MOSTRAR Y OCULTAR BOTONES DE CONFIRMACION

  public mostarConfirmacion(botones: HTMLDivElement) {
    botones.classList.remove("desaparecer");
    botones.classList.add("aparecer");
    setTimeout(()=>{
      botones.classList.remove("aparecer");
      botones.classList.add("desaparecer");
    },5000);
  }

  public tomada(indice: number) {
    let registro = this.tomasDeHoyPendientes[indice];
    let actualizacion = this.servicioGeneral.actualizarTomas(registro.idtomas, "tomada", registro.id_medicamento);
    actualizacion.then((respuesta) => {
      if (respuesta) {
        this.tomasDeHoyPendientes.splice(indice, 1);
        this.tomasDeHoyTomadas.push(registro);
        this.servicioMedicamento.actualizarTomas();
      }
    })
      .catch((error) => {
        console.log(error);
      });
  }

  public olvidada(indice: number) {
    let registro = this.tomasDeHoyPendientes[indice];
    let actualizacion = this.servicioGeneral.actualizarTomas(registro.idtomas, "olvidada", registro.id_medicamento);
    actualizacion.then((respuesta) => {
      if (respuesta) {
        this.tomasDeHoyPendientes.splice(indice, 1);
        this.tomasDeHoyOlvidadas.push(registro);
        this.servicioMedicamento.actualizarTomas();
      }
    })
      .catch((error) => {
        console.log(error);
      });

  }

}
