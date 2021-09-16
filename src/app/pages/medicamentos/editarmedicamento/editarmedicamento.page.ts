import { Component, OnInit } from '@angular/core';
import { Medicamento } from 'src/app/models/medicamento/medicamento';

import { MedicamentosService } from 'src/app/shared/medicamentos.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editarmedicamento',
  templateUrl: './editarmedicamento.page.html',
  styleUrls: ['./editarmedicamento.page.scss'],
})
export class EditarmedicamentoPage implements OnInit {

  public medicamento: Medicamento = new Medicamento();

  constructor(public medicamentoService: MedicamentosService) { }



  MedicamentoNombre: string = "Aspirina C Efervescente"
  MedicamentoDosis: string = "3"
  MedicamentoFrecuencia: string = "Cada 8 horas"
  MedicamentoCantInicial: string = "20"
  MedicamentoPrimeraToma: string = "13:00"

  MedicamentoComentarios: string = "No la cortes"

  ngOnInit() {
  }

  colorInput: string = "medium";
  lecturaInput: boolean = true
  nombreBoton: string = "Editar"

  onSubmit(form: NgForm) {

    console.log(form.value);

    this.medicamento.nombreMedicamento = form.value.nombreMedicamento;

    this.medicamento.dosis = form.value.dosis;
    this.medicamento.frecuencia = form.value.frecuencia;
    this.medicamento.cantidadInicial = form.value.cantidadInicial;
    this.medicamento.nombreMedicamento = form.value.nombreMedicamento;
    this.medicamento.primeraToma = form.value.primeraToma;
    this.medicamento.comentarios = form.value.comentarios;

    this.medicamentoService.medicamentos.push(this.medicamento);
    console.log(this.medicamentoService.medicamentos)
  }

  habilitar() {
    this.colorInput = "primary";
    this.lecturaInput = false
    this.nombreBoton = "Guardar"
  }

}
