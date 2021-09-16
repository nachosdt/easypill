import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Medicamento } from 'src/app/models/medicamento/medicamento';

import { ModalController } from '@ionic/angular';

//SE LLAMA A LA PAGINA MODAL 3
import { Modal3Page } from '../modals/modal3/modal3.page';

@Component({
  selector: 'app-add-medicamento',
  templateUrl: './add-medicamento.page.html',
  styleUrls: ['./add-medicamento.page.scss'],
})
export class AddMedicamentoPage implements OnInit {
  
  public medicamento : Medicamento = new Medicamento ();

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async onSubmit(form:NgForm) {

    console.log(form.value);

    this.medicamento.nombreMedicamento = form.value.nombreMedicamento;
    this.medicamento.dosis = form.value.dosis;
    this.medicamento.frecuencia = form.value.frecuencia;
    this.medicamento.cantidadInicial = form.value.cantidadInicial;
    this.medicamento.nombreMedicamento = form.value.nombreMedicamento;
    this.medicamento.primeraToma = form.value.primeraToma;
    this.medicamento.comentarios = form.value.comentarios;

    
      const modal = await this.modalController.create({
        component: Modal3Page,
        // cssClass: 'my-custom-class' //tiene q ser global
      });
      return await modal.present();
    
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

  // async openModal() {
  //   const modal = await this.modalController.create({
  //     component: Prueba1ModalPage,
  //     cssClass: 'my-custom-class' 
  //   });
  //   return await modal.present();
  // }
}
