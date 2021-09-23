import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private url="http://localhost:4000/usuario"
  constructor(private http:HttpClient) { }

  getPerfil(id:number){
    return this.http.get(this.url + "/" + id)
  }

  putPerfil(usuario:Usuario){
    const httpOptions ={headers:new HttpHeaders({
      'Content-Type':'application/json'})
    };
    let body = {
      "idusuarios":usuario.idusuario,
      "nombre":usuario.nombre===""?null:usuario.nombre,
      "email":usuario.email === ""?null:usuario.email,
      "contrasenia":usuario.contrasenia ===""?null:usuario.contrasenia,
    };
    return this.http.put(this.url,body,httpOptions);
  }

  deletePerfil(id:Number){
    const httpOptions ={headers:new HttpHeaders({
        'Content-Type':'application/json'}),
      body:{"idusuarios":id}
    };
    console.log(httpOptions);
    return this.http.delete(this.url,httpOptions);
    }
}

