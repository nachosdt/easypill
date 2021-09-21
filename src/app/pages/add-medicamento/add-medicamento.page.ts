import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Medicamento } from 'src/app/models/medicamento/medicamento';
import { MedicamentosService } from '../../shared/medicamentos.service';

import { ModalController } from '@ionic/angular';
import { ModalsPage } from '../modals/modals.page';

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
    console.log(this.medicamento.primeraToma);
    console.log(typeof this.medicamento.primeraToma)

    
      const modal = await this.modalController.create({
        component: ModalsPage,
        componentProps: {
          'titulo': 'Nuevo tratamiento añadido',
          'mensaje': `¡Tratamiento añadido!
          ${this.medicamento.nombreMedicamento}. Con EasyPill será más fácil recordar tus tomas`,
          'textoBoton': 'Ir a Medicamentos',
          'urlSalida' : '/medicamentos'
        }
      });
      return await modal.present();
    
  }

}
