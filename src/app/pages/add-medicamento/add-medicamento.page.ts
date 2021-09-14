import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Medicamento } from 'src/app/models/medicamento/medicamento';

@Component({
  selector: 'app-add-medicamento',
  templateUrl: './add-medicamento.page.html',
  styleUrls: ['./add-medicamento.page.scss'],
})
export class AddMedicamentoPage implements OnInit {
  
  public medicamento : Medicamento = new Medicamento ();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form:NgForm) {

    console.log(form.value);

    this.medicamento.nombreMedicamento = form.value.nombreMedicamento;
    this.medicamento.dosis = form.value.dosis;
    this.medicamento.frecuencia = form.value.frecuencia;
    this.medicamento.cantidadInicial = form.value.cantidadInicial;
    this.medicamento.nombreMedicamento = form.value.nombreMedicamento;
    this.medicamento.primeraToma = form.value.primeraToma;
    this.medicamento.comentarios = form.value.comentarios;
  }

  borrar(form:NgForm){
    form.value.nombreMedicamento = null;
    form.value.dosis  = null;
    form.value.frecuencia  = null;
    form.value.cantidadInicial  = null;
    form.value.nombreMedicamento  = null;
    form.value.primeraToma  = null;
    form.value.comentarios  = null;
  }

}
