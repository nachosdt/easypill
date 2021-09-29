import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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

  public prospectoBuscar : string;
  public nombreCabecera:string = "Consultar prospectos";
  public icono:boolean = false;
  public resultados: any [] = [];
  public sinResultados:boolean = false;

  @ViewChild("contenedor",{ read: ElementRef }) private contenedor: ElementRef;

  constructor(private detalleServicio : DetalleProspectoService) { 
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    if (this.detalleServicio.medicamento2Buscar !== "") {
      this.prospectoBuscar = this.detalleServicio.medicamento2Buscar;
      this.detalleServicio.getProspectos(this.detalleServicio.medicamento2Buscar)
      .then((respuesta)=>{
        this.resultados = respuesta;
        if (this.resultados.length === 0) {
          this.contenedor.nativeElement.setAttribute("style","--overflow: hidden;");
          this.sinResultados = true;
        } else {
          this.contenedor.nativeElement.setAttribute("style","--overflow: auto;");
        }
      })
      .catch((error)=>{
        console.log(error);
      });
    } else {
      this.contenedor.nativeElement.setAttribute("style","--overflow: hidden;");
    }

    
  }

  async buscarProspectos(form:NgForm){

    this.prospectoBuscar = form.value.medicamentoBuscado;

    await this.detalleServicio.getProspectos(this.prospectoBuscar)
    .then( data => {
      this.resultados = data;      
      if (data.length===0) {
        this.sinResultados = true;
        this.contenedor.nativeElement.setAttribute("style","--overflow: hidden;");
      } else {
        this.contenedor.nativeElement.setAttribute("style","--overflow: auto;");
      }
    })
    .catch((error)=>{
      console.log(error);
    });

  }



  guardarProspecto(prospecto:Prospecto){
    
    this.detalleServicio.prospectoAver = prospecto;
    
  }
}
