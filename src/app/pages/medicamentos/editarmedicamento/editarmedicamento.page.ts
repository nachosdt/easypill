import { Component, OnInit } from '@angular/core';
import { Medicamento } from 'src/app/models/medicamento/medicamento';

import { MedicamentosService } from 'src/app/shared/medicamentos.service';
import { ServicioGeneralService } from 'src/app/shared/servicio-general.service';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ModalsPage } from '../../modals/modals.page';

@Component({
  selector: 'app-editarmedicamento',
  templateUrl: './editarmedicamento.page.html',
  styleUrls: ['./editarmedicamento.page.scss'],
})
export class EditarmedicamentoPage implements OnInit {

  public nombreCabecera:string = "Tu tratamiento";
  public icono:boolean = true;
  public rutaAtras:any = "/medicamentos"

  public medicamento: Medicamento = this.medicamentoService.medicamentoSolicitado;
  public colorInput: string = "medium";
  public lecturaInput: boolean = true;
  public nombreBoton: string = "Editar";

  constructor(public medicamentoService: MedicamentosService,private modalController: ModalController,private servicioGeneral:ServicioGeneralService) { }

  ngOnInit() {
  }    
}
