import { Injectable } from '@angular/core';
import { Prospecto } from '../models/prospecto/prospecto';

@Injectable({
  providedIn: 'root'
})
export class DetalleProspectoService {

  public prospecto : Prospecto;

  constructor() {
    this.prospecto.srcfoto = 
      "https://cima.aemps.es/cima/fotos/thumbnails/materialas/51347/51347_materialas.jpg";
      
    this.prospecto.nombreMed =  
      "Aspirina";

    this.prospecto.lab =
      "Bayern S.L.";

    this.prospecto.url = 
      "https://cima.aemps.es/cima/dochtml/p/51347/P_51347.html";
    
    this.prospecto.secc =
    [
      "https://cima.aemps.es/cima/dochtml/p/51347/P_51347.html#1-qu-es-aspirina-c-y-para-qu-se-utiliza",

      "https://cima.aemps.es/cima/dochtml/p/51347/P_51347.html#2-qu-necesita-saber-antes-de-empezar-a-tomar-aspirina-c",

      "https://cima.aemps.es/cima/dochtml/p/51347/P_51347.html#3-c-mo-tomar-aspirina-c",

      "https://cima.aemps.es/cima/dochtml/p/51347/P_51347.html#4-posibles-efectos-adversos" ,
      
      "https://cima.aemps.es/cima/dochtml/p/51347/P_51347.hthttps://cima.aemps.es/cima/dochtml/p/51347/P_51347.html#5-conservaci-n-de-aspirina-cml#1-qu-es-aspirina-c-y-para-qu-se-utiliza" ,

      "https://cima.aemps.es/cima/dochtml/p/51347/P_51347.html#6-contenido-del-envase-e-informaci-n-adicional"
    ]
  }
}
