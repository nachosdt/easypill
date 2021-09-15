import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Medicamento } from 'src/app/models/medicamento/medicamento';
import { MedicamentosService } from '../../shared/medicamentos.service';

@Component({
  selector: 'app-add-medicamento',
  templateUrl: './add-medicamento.page.html',
  styleUrls: ['./add-medicamento.page.scss'],
})
export class AddMedicamentoPage implements OnInit {
  
  public medicamento : Medicamento = new Medicamento ();

  constructor(public medicamentoService: MedicamentosService) { }

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

    this.medicamentoService.medicamentos.push(this.medicamento);
    console.log(this.medicamentoService.medicamentos)
  }

}
