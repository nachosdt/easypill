import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mockup',
  templateUrl: './mockup.component.html',
  styleUrls: ['./mockup.component.scss'],
})
export class MockupComponent implements OnInit {

  public horario: Date = new Date();
  public minutos = this.horario.getMinutes()
  public hora = this.horario.getHours()
  constructor() { }



  ngOnInit() {
    let horario: Date = new Date();
    let minutos = horario.getMinutes()
    let hora = horario.getHours()
    // console.log(horario.getMinutes());
    // console.log(horario.getHours());


  }

}
