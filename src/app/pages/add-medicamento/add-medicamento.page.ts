import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Medicamento } from 'src/app/models/medicamento/medicamento';
import { MedicamentosService } from '../../shared/medicamentos.service';

import { ModalController } from '@ionic/angular';
import { ModalsPage } from '../modals/modals.page';
import { ServicioGeneralService } from '../../shared/servicio-general.service';

@Component({
  selector: 'app-add-medicamento',
  templateUrl: './add-medicamento.page.html',
  styleUrls: ['./add-medicamento.page.scss'],
})
export class AddMedicamentoPage implements OnInit {
  
  public medicamento : Medicamento = new Medicamento();
  public nombreCabecera:string = "Añadir un tratamiento";
  public rutaAtras:string = "/home";
  public icono:boolean = true;

  constructor(private modalController: ModalController, private medicamentoService: MedicamentosService,
    private servicioGeneral:ServicioGeneralService) { }

  ngOnInit() {
  }

  async onSubmit(form:NgForm) {

    if(
      (form.value.nombreMedicamento!=null) &&
      (form.value.dosis!=null) &&
      (form.value.frecuencia!=null)&&
      (form.value.cantidadInicial!=null)&&
      (form.value.primeraToma!=null)
    ){
      this.medicamento.idusuario = this.servicioGeneral.idUsuario;
      this.medicamento.nombre = form.value.nombreMedicamento;
      this.medicamento.dosisPorToma=form.value.dosis;
      this.medicamento.frecuencia=form.value.frecuencia;
      this.medicamento.stock = form.value.cantidadInicial;
      this.medicamento.fechaInicio = form.value.primeraToma;
      this.medicamento.fechaInicio = this.medicamento.fechaInicio.slice(0,16).replace("T"," ")
      this.medicamento.comentarios = form.value.comentarios;    

      let post = this.medicamentoService.postMedicamento(this.medicamento);
      post.then(async (respuesta)=>{
        if (respuesta) {
          const modal = await this.modalController.create({
            component: ModalsPage,
            componentProps: {
              'titulo': 'Nuevo tratamiento añadido',
              'mensaje': `¡Tratamiento añadido! Con EasyPill será más fácil recordar tus tomas`,
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
    } else {
      const modal = await this.modalController.create({
        component: ModalsPage,
        componentProps: {
          'titulo': 'Campos requeridos',
          'mensaje': `Todos los campos, excepto comentarios son requeridos`,
          'textoBoton': 'Continuar',
          'urlSalida' : '/add-medicamento'
        }
      });
      return await modal.present();
    }    
  }

}
