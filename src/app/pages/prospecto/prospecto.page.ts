import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-prospecto',
  templateUrl: './prospecto.page.html',
  styleUrls: ['./prospecto.page.scss'],
})

export class ProspectoPage implements OnInit {

  public busqueda:string;

  constructor() { }

  ngOnInit() {
  }

  buscar(form:NgForm){
    
  }

}
