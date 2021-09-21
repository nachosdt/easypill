import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';
@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private url="http://localhost:4000/registro"
  constructor(private http:HttpClient) { }

  postRegistro(newUser:Usuario){
    return this.http.post(this.url, newUser)
  }
}
