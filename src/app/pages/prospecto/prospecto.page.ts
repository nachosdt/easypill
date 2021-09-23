import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  // ionViewDidLoad() {
  //   this.buscarProspectos(this.prospectoBuscar.nombreMedBuscado);//Llamamos a la función getPost cuando la vista se cargue
  // }


  async buscarProspectos(form:NgForm){

    this.prospectoBuscar.nombreMedBuscado = form.value.medicamentoBuscado;
    
    // console.log("Valor nombre buscado: " + this.prospectoBuscar.nombreMedBuscado );

    // console.log("prospectoBuscar: " + this.prospectoBuscar.nombreMedBuscado );

    await this.detalleServicio.getProspectos(this.prospectoBuscar.nombreMedBuscado)
    .then( data => {
      for(let elemento in data){
        this.resultados.push(data[elemento]);
      }
      // console.log("Longitud: " + this.resultados.length);

      // for (let r in this.resultados){
      //   console.log("R: " + r);
      //   for(let i in this.resultados[r] ){
      //     console.log("I: " + i);
      //     console.log(this.resultados[r][i]);
      //   }
      // }
      
    });

  }
}
