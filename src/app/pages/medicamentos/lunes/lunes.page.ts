import { Component, OnInit } from '@angular/core';

import { MedicamentosService } from '../../../shared/medicamentos.service';
import { ServicioGeneralService } from 'src/app/shared/servicio-general.service';

@Component({
  selector: 'app-lunes',
  templateUrl: './lunes.page.html',
  styleUrls: ['./lunes.page.scss'],
})
export class LunesPage implements OnInit {

  public diaSolicitado:number = this.medicamentoService.diaSolicitado;
  public medicamentosDia:any[] = [];
  public dias:string[] = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
  public titulo:string = this.dias[this.calcularDia()];

  constructor(private medicamentoService: MedicamentosService, private servicioGeneral:ServicioGeneralService) {
    
  }

  ngOnInit() {
    let medicamentos = this.medicamentoService.getTomasDia(this.servicioGeneral.idUsuario,this.diaSolicitado);
    medicamentos.then((respuesta) => {
      this.medicamentosDia = respuesta;
      console.log(respuesta);
    })
    .catch((error) => {
      console.log(error);
    });

  }

  private calcularDia() {
    let resultado = null;
    let suma = this.servicioGeneral.diaSemana + this.diaSolicitado;
    if(suma > 6) {
      resultado = suma-7;
    } else {
      resultado = suma;
    }
    return resultado;
  }

  public convertirHora(hora:string):string {
    return hora.slice(10,15);
  }

}
