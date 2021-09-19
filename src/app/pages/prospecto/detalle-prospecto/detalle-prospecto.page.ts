import { Component, OnInit } from '@angular/core';
import { DetalleProspectoService } from 'src/app/shared/detalle-prospecto.service';
import { Prospecto } from '../../../models/prospecto/prospecto';

@Component({
  selector: 'app-detalle-prospecto',
  templateUrl: './detalle-prospecto.page.html',
  styleUrls: ['./detalle-prospecto.page.scss'],
})

export class DetalleProspectoPage implements OnInit {

  // public prospecto : Prospecto = new Prospecto ();
  public miProspecto : Prospecto = new Prospecto(); 
  
  constructor(public detalleService: DetalleProspectoService) { 
    this.miProspecto = this.detalleService.prospectoS;
    // A rellenar trae info de resultados prospectos
    for(let item in this.miProspecto){
      console.log(this.miProspecto[item]);
    }
  }
  
  ngOnInit() {
  }
  
}