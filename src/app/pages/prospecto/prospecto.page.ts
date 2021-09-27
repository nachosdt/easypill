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

  public prospectoBuscar : string = this.detalleServicio.medicamento2Buscar;
  public nombreCabecera:string = "Consultar prospectos";
  public icono:boolean = false;
  public resultados: any [] = [];
  public sinResultados:boolean = false;


  constructor(private detalleServicio : DetalleProspectoService) { 
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    if (this.detalleServicio.medicamento2Buscar !== "") {
      this.detalleServicio.getProspectos(this.detalleServicio.medicamento2Buscar)
      .then((respuesta)=>{
        this.resultados = respuesta;
      })
      .catch((error)=>{
        console.log(error);
      });
    }
  }

  async buscarProspectos(form:NgForm){

    this.prospectoBuscar = form.value.medicamentoBuscado;

    await this.detalleServicio.getProspectos(this.prospectoBuscar)
    .then( data => {
      this.resultados = data;      
      if (data.length===0) {this.sinResultados = true;}
    })
    .catch((error)=>{
      console.log(error);
    });

  }



  guardarProspecto(prospecto:Prospecto){
    
    this.detalleServicio.prospectoAver = prospecto;
    
  }
}
