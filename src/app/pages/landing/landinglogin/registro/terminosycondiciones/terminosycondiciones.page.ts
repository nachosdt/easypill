import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-terminosycondiciones',
  templateUrl: './terminosycondiciones.page.html',
  styleUrls: ['./terminosycondiciones.page.scss'],
})
export class TerminosycondicionesPage implements OnInit {

  constructor(public location:Location) { }

  ngOnInit() {
  }
  goBack(){
    this.location.back();
  }
}
