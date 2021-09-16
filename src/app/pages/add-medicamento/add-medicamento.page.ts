import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Medicamento } from 'src/app/models/medicamento/medicamento';
import { MedicamentosService } from '../../shared/medicamentos.service';

import { ModalController } from '@ionic/angular';
import { Modal3Page } from '../modals/modal3/modal3.page';

@Component({
  selector: 'app-add-medicamento',
  templateUrl: './add-medicamento.page.html',
  styleUrls: ['./add-medicamento.page.scss'],
})
export class AddMedicamentoPage implements OnInit {
  
  public medicamento : Medicamento = new Medicamento ();

  constructor(public modalController: ModalController, public medicamentoService: MedicamentosService) { }

  ngOnInit() {
  }

  async onSubmit(form:NgForm) {

    console.log(form.value);

    this.medicamento.nombreMedicamento = form.value.nombreMedicamento;
    this.medicamento.dosis = form.value.dosis;
    this.medicamento.frecuencia = form.value.frecuencia;
    this.medicamento.cantidadInicial = form.value.cantidadInicial;
    this.medicamento.nombreMedicamento = form.value.nombreMedicamento;
    let hora : string = form.value.primeraToma;
    this.medicamento.primeraToma = hora.slice(11,16);
    this.medicamento.comentarios = form.value.comentarios;

    this.medicamentoService.medicamentos.push(this.medicamento);
    console.log(this.medicamentoService.medicamentos);
    console.log(typeof this.medicamento.primeraToma)

    
      const modal = await this.modalController.create({
        component: Modal3Page,
      });
      return await modal.present();
    
  }

}
