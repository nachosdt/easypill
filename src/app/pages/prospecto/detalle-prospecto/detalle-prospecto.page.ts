import { Component, OnInit } from '@angular/core';
// import { DetalleProspectoService } from 'src/app/shared/detalle-prospecto.service';
import { Prospecto } from '../../../models/prospecto/prospecto';

@Component({
  selector: 'app-detalle-prospecto',
  templateUrl: './detalle-prospecto.page.html',
  styleUrls: ['./detalle-prospecto.page.scss'],
})

export class DetalleProspectoPage implements OnInit {

  // public prospecto : Prospecto = new Prospecto ();
  public prospecto : any = {
    srcfoto : 
      "https://cima.aemps.es/cima/fotos/thumbnails/materialas/51347/51347_materialas.jpg",
      
    nombreMed :  
      "ASPIRINA C 400 mg/240 mg COMPRIMIDOS EFERVESCENTES",
    lab :
      "Bayern S.L.",

    url :
      "https://cima.aemps.es/cima/dochtml/p/51347/P_51347.html",
    
    secc :
    [
      { titulo:". QUÉ ES y para qué se utiliza",
        contenido: "https://cima.aemps.es/cima/pdfs/p/51347/P_51347.pdf#1-qu-es-aspirina-c-y-para-qu-se-utiliza"

      },
      { titulo:". antes de tomar",
        contenido: "https://cima.aemps.es/cima/pdfs/p/51347/P_51347.pdf#2-qu-necesita-saber-antes-de-empezar-a-tomar-aspirina-c"
      },
      {
        titulo:". como tomar",
        contenido: "https://cima.aemps.es/cima/pdfs/p/51347/P_51347.pdf#3-c-mo-tomar-aspirina-c"

      },
      {
        titulo:". efectos adversos",
        contenido: "https://cima.aemps.es/cima/pdfs/p/51347/P_51347.pdf#4-posibles-efectos-adversos" 

      },
      {
        titulo:". conservación",
        contenido: "https://cima.aemps.es/cima/pdfs/p/51347/P_51347.pdf#5-conservaci-n-de-aspirina" 
      },
      {
        titulo:". contenido e información adicional",
        contenido: "https://cima.aemps.es/cima/pdfs/p/51347/P_51347.pdf#6-contenido-del-envase-e-informaci-n-adicional" 
      }
    ]
  }
  

  constructor() { 
    // this.prospecto = this.detalleService.prospecto;
    // A rellenar trae info de resultados prospectos
  }

  ngOnInit() {
  }

}
