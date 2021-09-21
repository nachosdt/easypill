import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DetalleProspectoService } from 'src/app/shared/detalle-prospecto.service';
import { Medicamento } from 'src/app/models/medicamento/medicamento';
import { Prospecto } from 'src/app/models/prospecto/prospecto';

@Component({
  selector: 'app-prospecto',
  templateUrl: './prospecto.page.html',
  styleUrls: ['./prospecto.page.scss'],
})

export class ProspectoPage implements OnInit {

  public medicamento : Medicamento = new Medicamento();

  public prospectoBuscar : string  ;

  public resultado: any [] = [];


  // public detalleServicio : DetalleProspectoService = new DetalleProspectoService();

  constructor() { }

  // constructor(private detalleServicio : DetalleProspectoService) { }

  ngOnInit() {
  }

  buscarProspecto(form:NgForm){

    this.medicamento.nombreMedicamento = form.value.medicamentoBuscado;
    
    console.log("Valor nombre buscado: " + this.medicamento.nombreMedicamento );

    this.prospectoBuscar = form.value.medicamentoBuscado;
    console.log("prospectoBuscar: " + this.medicamento.nombreMedicamento );

    // this.enviarADetalleServicio(this.prospectoBuscar);
    // console.log("Medicamento a buscar en Servicio:" + this.detalleServicio.medicamento2Buscar);

    // this.resultado = this.detalleServicio.getResultadosProspectos();
    
  }

  // enviarADetalleServicio(name:string)
  // {
  //   this.detalleServicio.setMedicamento2Buscar(name);
  // }

}
