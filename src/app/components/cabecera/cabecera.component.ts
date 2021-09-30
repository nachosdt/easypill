import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss'],
})
export class CabeceraComponent implements OnInit {

  @Input() titulo: string;
  @Input() iconoAtras: boolean;
  @Input() rutaAtras: any;

  constructor(private router: Router) { }

  ngOnInit() { }

  public ruta(ruta: any) {
    this.router.navigate([ruta]);
    console.log("hoa soy la cabecera");

  }

}
