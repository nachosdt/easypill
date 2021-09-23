import { Injectable } from '@angular/core';
// import { Prospecto } from '../models/prospecto/prospecto';


import { HttpClient } from '@angular/common/http';
// import { NgForm } from '@angular/forms';



@Injectable({
  providedIn: 'root'
})

export class DetalleProspectoService {

  public medicamento2Buscar : string;

  public result : any [] = [];


  public setMedicamento2Buscar (nombre : string){
    this.medicamento2Buscar = nombre;
  }

  public getMedicamento2Buscar () : string{
    return this.medicamento2Buscar;
  }

  constructor(private http:HttpClient){
    console.log("Servicio-Medicamento buscado: "+ this.medicamento2Buscar);
  }

  public async getProspectos(nameMedicina:string){
    try{
      let url = "http://localhost:4000/prospecto?nombreMed=" + nameMedicina;

      let param: any =
      {
          headers: {"Content-type": "application/json; chasert= UTF-8"},
          method: "GET"
      }

      let data = await fetch(url, param);
      let result = await data.json();

      // for (let r in result){
      //   console.log("R: " + r);
      //   for(let i in result[r] ){
      //     console.log("I: " + i);
      //     console.log(result[r][i]);
      //   }
      // }
      
      return result;

    }
    catch(err){
      console.log(err);
    }
  }

  public async getSecciones(numReg:string){
    try{
      let url = "http://localhost:4000/detalle-prospecto?nregistro=" + numReg;

      let param: any =
      {
          headers: {"Content-type": "application/json; chasert= UTF-8"},
          method: "GET"
      }

      let data = await fetch(url, param);
      let resultSecc = await data.json();

      // for (let r in result){
      //   console.log("R: " + r);
      //   for(let i in result[r] ){
      //     console.log("I: " + i);
      //     console.log(result[r][i]);
      //   }
      // }
      
      return resultSecc;

    }
    catch(err){
      console.log(err);
    }
  }

}



