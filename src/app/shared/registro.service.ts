import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';
@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private 
  constructor(private http:HttpClient) { }

  public postRegistro(newUser:Usuario):any {
    let url = "https://api-easypill.herokuapp.com/registro";
    return this.http.post(url, newUser);
  }
}
