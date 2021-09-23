import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { IniciarPage } from '../pages/landing/landinglogin/iniciar/iniciar.page';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  nombre: string
  loginPage: IniciarPage



  private url = "http://localhost:300/login"
  constructor(private http: HttpClient) {


  }

  postLogin(newUser: Usuario) {
    return this.http.post(this.url, newUser)
  }



}
