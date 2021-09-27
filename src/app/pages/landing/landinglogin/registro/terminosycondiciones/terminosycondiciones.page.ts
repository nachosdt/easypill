import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-terminosycondiciones',
  templateUrl: './terminosycondiciones.page.html',
  styleUrls: ['./terminosycondiciones.page.scss'],
})
export class TerminosycondicionesPage implements OnInit {

  public nombreCabecera:string = "Términos y condiciones";
  public icono:boolean = true;
  public rutaAtras:any = "/landing/landinglogin/registro";

  constructor(public location:Location) { }

  ngOnInit() {
  }
  
  goBack(){
    this.location.back();
  }
}
