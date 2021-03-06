import { Injectable } from '@angular/core';

import { Medicamento } from '../models/medicamento/medicamento';
import { ServicioGeneralService } from './servicio-general.service';
@Injectable({
  providedIn: 'root'
})
export class MedicamentosService {

  public diaSolicitado:number;
  public medicamentoSolicitado:Medicamento;
  public medicamentos:Medicamento[] = [];
  

  constructor(private servicioGeneral:ServicioGeneralService) {} 

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

  public async getTodosLosMedicamentos(id:number) {
    let url = `https://api-easypill.herokuapp.com/medicamentos?id=${id}`;
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

  public async getTomasDia(id:number,dia:number) {
    let url = `https://api-easypill.herokuapp.com/tomasdia?id=${id}&dia=${dia}`;
    let param = {
        headers: {"Content-Type": "application/json; charset = UTF-8"},
        method: "GET"
    };
    try {
        let data = await fetch(url,param);
        let resultBruto = await data.json();
        let tomas = resultBruto.datos;
        console.log(`Nº tomas de del día ${dia}:`, tomas.length);        
        return tomas;                            
    } catch(error) {
        console.log(error);
    }
  }  

  public async postMedicamento(medicamento:Medicamento) {
    let url = `https://api-easypill.herokuapp.com/medicamentos`;    
    let param = {
        headers: {"Content-Type": "application/json; charset = UTF-8"},
        method: "POST",
        body: JSON.stringify(medicamento)
    };    
    try {
        let data = await fetch(url,param);
        let resultadoBruto = await data.json();
        let respuesta:boolean;
        if (resultadoBruto.error===false) {
          respuesta = true;
          this.actualizarMedicamentos();
          this.actualizarTomas();
        } else {
          respuesta = false;
        }
        return respuesta;
    } catch(error) {
        console.log(error);
    }
  }  

  public async eliminarMedicamento(idmedicamentos:number) {
    let url = `https://api-easypill.herokuapp.com/medicamentos`;
    let cuerpo = {"idmedicamentos": idmedicamentos};
    let param = {
        headers: {"Content-Type": "application/json; charset = UTF-8"},
        method: "DELETE",
        body: JSON.stringify(cuerpo)
    };    
    try {
        let data = await fetch(url,param);
        let resultadoBruto = await data.json();
        let respuesta:boolean;
        if (resultadoBruto.error===false) {
          respuesta = true;
          this.actualizarMedicamentos();
          this.actualizarTomas();
        } else {
          respuesta = false;
        }
        return respuesta;
    } catch(error) {
        console.log(error);
    }
  }  

  public async modificarMedicamento(medicamento:Medicamento) {
    let url = `https://api-easypill.herokuapp.com/medicamentos`;
    let param = {
        headers: {"Content-Type": "application/json; charset = UTF-8"},
        method: "PUT",
        body: JSON.stringify(medicamento)
    };    
    try {
        let data = await fetch(url,param);
        let resultadoBruto = await data.json();
        let respuesta:boolean;
        if (resultadoBruto.error===false) {
          respuesta = true;
          this.actualizarMedicamentos();
          this.actualizarTomas();
        } else {
          respuesta = false;
        }
        return respuesta;
    } catch(error) {
        console.log(error);
    }
  } 

  public async actualizarMedicamentos() {
    this.medicamentos = await this.getTodosLosMedicamentos(this.servicioGeneral.idUsuario);
  }

  public async actualizarTomas() {
    this.servicioGeneral.tomasDeHoy = await this.servicioGeneral.getTomasHoy();
  }
}
