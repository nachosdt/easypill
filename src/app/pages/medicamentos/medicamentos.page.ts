import { Component, OnInit } from '@angular/core';

import { MedicamentosService } from '../../shared/medicamentos.service';
import { Medicamento } from '../../models/medicamento/medicamento';
import { ServicioGeneralService } from 'src/app/shared/servicio-general.service';

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.page.html',
  styleUrls: ['./medicamentos.page.scss'],
})
export class MedicamentosPage implements OnInit {

  public nombreCabecera:string = "Medicamentos";
  public diaSemana: number;
  public dias:string[] = ["L","M","X","J","V","S","D"];
  public diasOrdenados:string[];
  
  public medicamentos:any[] = [];

  constructor(public medicamentoService: MedicamentosService, private servicioGeneral:ServicioGeneralService) { 
    
    this.diaSemana = servicioGeneral.diaSemana;
    this.diasOrdenados = this.ordenDiasSemana(); 
  }

  ngOnInit() {
    let consultaMed = this.medicamentoService.getTodosLosMedicamentos(this.servicioGeneral.idUsuario);
    consultaMed.then((respuesta) => {
      this.medicamentos = respuesta;
    })
    .catch((error) => {
      console.log(error);
    });
    console.log(this.medicamentos);
  }

  private ordenDiasSemana() {
    let arrayDias:string[] = this.dias.slice(this.diaSemana-1).concat(this.dias.slice(0,this.diaSemana-1));
    //console.log(arrayDias);
    return arrayDias;
  }

  public diaSolicitado(indice:number) {
    this.medicamentoService.diaSolicitado = indice;
  }

}
