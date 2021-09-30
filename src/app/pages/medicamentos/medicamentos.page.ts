import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MedicamentosService } from '../../shared/medicamentos.service';
import { Medicamento } from '../../models/medicamento/medicamento';
import { ServicioGeneralService } from 'src/app/shared/servicio-general.service';

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.page.html',
  styleUrls: ['./medicamentos.page.scss'],
})
export class MedicamentosPage implements OnInit {

  public nombreCabecera:string = "Tratamientos";
  public diaSemana: number;
  public dias:string[] = ["L","M","X","J","V","S","D"];
  public diasOrdenados:string[];  
  public medicamentos:Medicamento[] = [];

  @ViewChild("contenedor",{ read: ElementRef }) private contenedor: ElementRef;

  constructor(public medicamentoService: MedicamentosService, private servicioGeneral:ServicioGeneralService) { 
    
    this.diaSemana = servicioGeneral.diaSemana;
    this.diasOrdenados = this.ordenDiasSemana();
  }

  ngOnInit() {
    
  }

  ionViewWillEnter() {    
    this.medicamentos = this.medicamentoService.medicamentos;
    if (this.medicamentos.length < 5) {
      this.contenedor.nativeElement.setAttribute("style","--overflow: hidden;");
    } else {
      this.contenedor.nativeElement.setAttribute("style","--overflow: auto;");
    }
  }

  private ordenDiasSemana() {
    let arrayDias:string[] = this.dias.slice(this.diaSemana-1).concat(this.dias.slice(0,this.diaSemana-1));    
    return arrayDias;
  }

  public diaSolicitado(indice:number) {
    this.medicamentoService.diaSolicitado = indice;
  }

  public editarMedicamento(indice:number) {
    this.medicamentoService.medicamentoSolicitado = this.medicamentos[indice];
  }

}
