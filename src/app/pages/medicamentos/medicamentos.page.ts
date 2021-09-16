import { Component, OnInit } from '@angular/core';
import { MedicamentosService } from '../../shared/medicamentos.service';
import { Medicamento } from '../../models/medicamento/medicamento';

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.page.html',
  styleUrls: ['./medicamentos.page.scss'],
})
export class MedicamentosPage implements OnInit {

  public nombreCabecera:string = "Medicamentos";
  public medicamento : Medicamento;
  public medicamentos : Medicamento[];
  constructor(public medicamentoService: MedicamentosService) { 
    this.medicamentos = medicamentoService.medicamentos;
  }

  ngOnInit() {
    console.log(this.medicamentos);
  }

}
