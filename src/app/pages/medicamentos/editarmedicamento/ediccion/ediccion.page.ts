import { Component, OnInit } from '@angular/core';
import { Medicamento } from '../../../../models/medicamento/medicamento';
import { MedicamentosService } from '../../../../shared/medicamentos.service';
import { Location } from '@angular/common';

import { ModalController } from '@ionic/angular';
import { Modal3Page } from '../../../modals/modal3/modal3.page';

@Component({
  selector: 'app-ediccion',
  templateUrl: './ediccion.page.html',
  styleUrls: ['./ediccion.page.scss'],
})
export class EdiccionPage implements OnInit {

  public medicamento: Medicamento = new Medicamento();

  constructor(public medicamentoService: MedicamentosService,
    public modalController: ModalController,
    public location: Location)
   { }



  MedicamentoNombre: string = "Aspirina C Efervescente"
  MedicamentoDosis: string = "3"
  MedicamentoFrecuencia: string = "Cada 8 horas"
  MedicamentoCantInicial: string = "20"
  MedicamentoPrimeraToma: string = "13:00"

  MedicamentoComentarios: string = "No la cortes"

  colorInput: string = "medium";
  lecturaInput: boolean = false;
  nombreBoton: string = "Editar"

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }
  async guardarMedicamento() {
    const modal = await this.modalController.create({
      component: Modal3Page,
    });
    return await modal.present();
  }

  eliminarMedicamento() {
    this.medicamento = null;

  }
}
