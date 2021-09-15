import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Medicamento } from 'src/app/models/medicamento/medicamento';

@Component({
  selector: 'app-prospecto',
  templateUrl: './prospecto.page.html',
  styleUrls: ['./prospecto.page.scss'],
})

export class ProspectoPage implements OnInit {

  public medicamento : Medicamento = new Medicamento();

  constructor() { }

  ngOnInit() {
  }

  buscarProspecto(form:NgForm){
    this.medicamento.nombreMedicamento = form.value.medicamentoBuscado;
    console.log("Valor nombre buscado: " + this.medicamento.nombreMedicamento );
  }

}
