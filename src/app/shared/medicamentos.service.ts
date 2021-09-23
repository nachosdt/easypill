import { Injectable } from '@angular/core';
import { Medicamento } from '../models/medicamento/medicamento';

@Injectable({
  providedIn: 'root'
})
export class MedicamentosService {
  public medicamentos: Medicamento[] = [
    {nombreMedicamento: "Aspirina", dosis: 3, frecuencia: "8 horas", cantidadInicial: 28, comentarios: "", primeraToma: "12:30", completado : false },
    {nombreMedicamento: "Aspirina2", dosis: 3, frecuencia: "8 horas", cantidadInicial: 28, primeraToma: "13:30", comentarios: "", completado : false},
    {nombreMedicamento: "Aspirina3", dosis: 3, frecuencia: "8 horas", cantidadInicial: 28, primeraToma: "20:00", comentarios: "", completado : false},
    {nombreMedicamento: "Aspirina4", dosis: 3, frecuencia: "8 horas", cantidadInicial: 28, primeraToma: "21:15", comentarios: "", completado : false},
    {nombreMedicamento: "Aspirina5", dosis: 3, frecuencia: "8 horas", cantidadInicial: 28, primeraToma: "22:00", comentarios: "", completado : true},
  ]
  constructor() { 

  }

  public async getMedicamentosDeHoy(hora00:number, hora24:number, id:number) {
    let url = `https://api-easypill.herokuapp.com/tomas?id=${id}&desde=${hora00}&hasta=${hora24}`;
    let param = {
        headers: {"Content-Type": "application/json; charset = UTF-8"},
        method: "GET"
    };
    try {
        let data = await fetch(url,param);
        let resultBruto = await data.json();
        let medicamentos = resultBruto.datos;
        console.log("Nº medicamentos: ", medicamentos.length);        
        return medicamentos;                            
    } catch(error) {
        console.log(error);
    }
  }
}
