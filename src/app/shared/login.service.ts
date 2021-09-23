import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = "http://localhost:4000/login"
  constructor(private http: HttpClient) { }

  postLogin(newUser: Usuario) {
    return this.http.post(this.url, newUser)
  }
}
