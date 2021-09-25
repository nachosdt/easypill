import { Component, OnInit } from '@angular/core';
import { Medicamento } from '../../../../models/medicamento/medicamento';
import { MedicamentosService } from '../../../../shared/medicamentos.service';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

import { ModalController } from '@ionic/angular';
import { ModalsPage } from '../../../modals/modals.page';
import { ServicioGeneralService } from 'src/app/shared/servicio-general.service';


@Component({
  selector: 'app-ediccion',
  templateUrl: './ediccion.page.html',
  styleUrls: ['./ediccion.page.scss'],
})
export class EdiccionPage implements OnInit {

  public medicamento: Medicamento = this.servicioMedicamento.medicamentoSolicitado;
  public colorInput: string = "medium";
  public lecturaInput: boolean = false;
  public nombreBoton: string = "Editar"

  constructor(private servicioMedicamento: MedicamentosService,
    public modalController: ModalController,
    public location: Location,
    private servicioGeneral:ServicioGeneralService) { }   

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

  onSubmit(form: NgForm) {
    
    this.medicamento.nombre = form.value.nombreMedicamento;
    this.medicamento.dosisPorToma=form.value.dosis;
    this.medicamento.frecuencia=form.value.frecuencia;
    this.medicamento.stock = form.value.cantidadInicial;
    this.medicamento.fechaInicio = form.value.primeraToma;
    this.medicamento.fechaInicio = this.medicamento.fechaInicio.slice(0,16).replace("T"," ")
    this.medicamento.comentarios = form.value.comentarios;    

    let post = this.servicioMedicamento.modificarMedicamento(this.medicamento);
    post.then(async (respuesta)=>{
      if (respuesta) {
        const modal = await this.modalController.create({
          component: ModalsPage,
          componentProps: {
            'titulo': 'Tratamiento actualizado',
            'mensaje': `El tratamiento se ha actualizado corréctamente`,
            'textoBoton': 'Ir a Medicamentos',
            'urlSalida' : '/medicamentos'
          }
        });
        return await modal.present();
      }
    })
    .catch((error)=>{
      console.log(error);
    }); 
  }  

  async eliminarMedicamento(idmedicamentos:number) {
    let peticion = this.servicioMedicamento.eliminarMedicamento(idmedicamentos);
    peticion.then(async (respuesta)=>{
      if (respuesta) {
        const modal = await this.modalController.create({
          component: ModalsPage,
          componentProps: {
              'titulo': 'Tratamiento eliminado',
              'mensaje': `${this.medicamento.nombre} eliminado de tus tratamientos`,
              'textoBoton': 'Continuar',
              'urlSalida' : '/medicamentos'
          }
        });
        return await modal.present();
      }
    })
    .catch((error)=>{
      console.log(error);
    });
  }
}
