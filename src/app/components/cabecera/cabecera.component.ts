import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss'],
})
export class CabeceraComponent implements OnInit {

  @Input() titulo:string;
  @Input() iconoAtras:boolean;
  @Input() rutaAtras:string;
  
  constructor(private router:Router) { }

  ngOnInit() {}

  public ruta(ruta:string) {
    this.router.navigate([ruta]);
  }

}
