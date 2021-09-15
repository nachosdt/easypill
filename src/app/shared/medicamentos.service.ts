import { Injectable } from '@angular/core';
import { Medicamento } from '../models/medicamento/medicamento';

@Injectable({
  providedIn: 'root'
})
export class MedicamentosService {
  public medicamentos: Medicamento[] = [
    {nombreMedicamento: "Aspirina", dosis: 3, frecuencia: "8 horas", cantidadInicial: 28, primeraToma: new Date(), comentarios: ""},
    {nombreMedicamento: "Aspirina2", dosis: 3, frecuencia: "8 horas", cantidadInicial: 28, primeraToma: new Date(), comentarios: ""},
    {nombreMedicamento: "Aspirina3", dosis: 3, frecuencia: "8 horas", cantidadInicial: 28, primeraToma: new Date(), comentarios: ""},
    {nombreMedicamento: "Aspirina4", dosis: 3, frecuencia: "8 horas", cantidadInicial: 28, primeraToma: new Date(), comentarios: ""},
    {nombreMedicamento: "Aspirina5", dosis: 3, frecuencia: "8 horas", cantidadInicial: 28, primeraToma: new Date(), comentarios: ""},
  ]
  constructor() { }
}
