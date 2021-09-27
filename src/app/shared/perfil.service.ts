import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private url="https://api-easypill.herokuapp.com/usuario";
  public usuario:Usuario = new Usuario();
  
  constructor(private http:HttpClient) { }

  public getPerfil(id:number):any {
    return this.http.get(this.url + `/?id=${id}`);
  }

  public putPerfil(usuario:Usuario):any{
    const httpOptions ={headers:new HttpHeaders({
      'Content-Type':'application/json'})
    };
    let body = {
      "idusuarios":usuario.idusuario,
      "nombre":usuario.nombre,
      "email":usuario.email,
      "contrasenia":usuario.contrasenia,
      "fechaNacimiento": usuario.fechaNacimiento
    };
    return this.http.put(this.url,body,httpOptions);
  }

  public deletePerfil(id:Number):any{
    const httpOptions ={headers:new HttpHeaders({
        'Content-Type':'application/json'}),
      body:{"idusuarios":id}
    };    
    return this.http.delete(this.url,httpOptions);
    }
}

