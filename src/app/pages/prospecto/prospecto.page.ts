import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { FormsModule } from '@angular/forms';
import { DetalleProspectoService } from 'src/app/shared/detalle-prospecto.service';
import { MedBuscado } from 'src/app/models/medBuscado/med-buscado';
import { Prospecto } from 'src/app/models/prospecto/prospecto';

@Component({
  selector: 'app-prospecto',
  templateUrl: './prospecto.page.html',
  styleUrls: ['./prospecto.page.scss'],
})

export class ProspectoPage implements OnInit {

  public prospectoBuscar : MedBuscado = new MedBuscado();  ;

  public resultados: any [] = [];


  constructor(private detalleServicio : DetalleProspectoService) { 
  }

  ngOnInit() {
  }

  async buscarProspectos(form:NgForm){

    this.prospectoBuscar.nombreMedBuscado = form.value.medicamentoBuscado;

    await this.detalleServicio.getProspectos(this.prospectoBuscar.nombreMedBuscado)
    .then( data => {
      this.resultados = data;
    });

  }



  guardarProspecto(prospecto:Prospecto){
    
    this.detalleServicio.prospectoAver = prospecto;
    
  }
}
