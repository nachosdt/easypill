import { Component, OnInit } from '@angular/core';
import { DetalleProspectoService } from 'src/app/shared/detalle-prospecto.service';
import { Prospecto } from '../../../models/prospecto/prospecto';

@Component({
  selector: 'app-detalle-prospecto',
  templateUrl: './detalle-prospecto.page.html',
  styleUrls: ['./detalle-prospecto.page.scss'],
})

export class DetalleProspectoPage implements OnInit {

  public miProspecto : Prospecto = new Prospecto(); 
  public arrSecciones : any[] = [];

  constructor(private detalleServicio : DetalleProspectoService){
    this.miProspecto = detalleServicio.prospectoAver;

    this.verProspecto();
  }

  ngOnInit() {
  }

async verProspecto(){
  
  let nRegistro = this.miProspecto.nregistro;
  
  await this.detalleServicio.getSecciones(nRegistro)
  .then( data => {
    
    for(let i=0; i<7 ; i++){
      switch (i){
        case 0:
          this.miProspecto.secc0.titulo = data[0].titulo;
          this.miProspecto.secc0.contenido = data[0].contenido;
          break;
        case 1:
          this.miProspecto.secc1.titulo = data[1].titulo;
          this.miProspecto.secc1.contenido = data[1].contenido;
          break;
        case 2:
          this.miProspecto.secc2.titulo = data[2].titulo;
          this.miProspecto.secc2.contenido = data[2].contenido;
          break;
        case 3:
          this.miProspecto.secc3.titulo = data[3].titulo;
          this.miProspecto.secc3.contenido = data[3].contenido;
          break;
        case 4:
          this.miProspecto.secc4.titulo = data[4].titulo;
          this.miProspecto.secc4.contenido = data[4].contenido;
          break;
        case 5:
          this.miProspecto.secc5.titulo = data[5].titulo;
          this.miProspecto.secc5.contenido = data[5].contenido;
          break;
        case 6:
          this.miProspecto.secc6.titulo = data[6].titulo;
          this.miProspecto.secc6.contenido = data[6].contenido;
          break;
      }
    }     
  });
  this.arrSecciones.push( this.miProspecto.secc0,
    this.miProspecto.secc1,
    this.miProspecto.secc2,
    this.miProspecto.secc3,
    this.miProspecto.secc4,
    this.miProspecto.secc5,
    this.miProspecto.secc6
    );
   
}
}  
