import { Component, OnInit } from '@angular/core';
import { MedicamentosService } from '../../../shared/medicamentos.service';
import { Medicamento } from '../../../models/medicamento/medicamento';

@Component({
  selector: 'app-lunes',
  templateUrl: './lunes.page.html',
  styleUrls: ['./lunes.page.scss'],
})
export class LunesPage implements OnInit {

  public medicamentos !: Medicamento[];

  constructor(public medicamentoService: MedicamentosService) {
    this.medicamentos = medicamentoService.medicamentos;
   }

  ngOnInit() {
  }

}
