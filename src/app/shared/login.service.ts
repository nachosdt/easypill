import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private http: HttpClient) { }

  public postLogin(email:string,contrasenia:string):any {
    let url = "https://api-easypill.herokuapp.com/login";
    let body = {"email":email,"contrasenia":contrasenia};
    return this.http.post(url, body);
  }

  public recuperarContrasenia(email:string):any {
    let url = "https://api-easypill.herokuapp.com/recuperarpass";
    let body = {"email":email};
    return this.http.post(url, body);
  }
}
