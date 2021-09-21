import { Component, OnInit } from '@angular/core';
import { Medicamento } from '../../../../models/medicamento/medicamento';
import { MedicamentosService } from '../../../../shared/medicamentos.service';
import { Location } from '@angular/common';

import { ModalController } from '@ionic/angular';
import { ModalsPage } from '../../../modals/modals.page';

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
      component: ModalsPage,
      componentProps: {
        'titulo': 'Nuevo tratamiento añadido',
          'mensaje': `¡Tratamiento añadido!\n
          ${this.medicamento.nombreMedicamento}\n Te ayudaremos a recordar tus tomas`,
          'textoBoton': 'Ir a Medicamentos',
          'urlSalida' : '/medicamentos'
      }
    });
    return await modal.present();
  }

  async eliminarMedicamento() {
    // this.medicamento = null;
    const modal = await this.modalController.create({
      component: ModalsPage,
      componentProps: {
        'titulo': 'Tratamiento eliminado',
          'mensaje': `${this.medicamento.nombreMedicamento} eliminado de tus tratamientos`,
          'textoBoton': 'Continuar',
          'urlSalida' : '/medicamentos'
      }
    });
    return await modal.present();

  }
}
