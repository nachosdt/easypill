import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  @ViewChild('irAlogin') irAlogin: ElementRef;


  constructor(private router: Router,) { }

  ngOnInit() {
    setTimeout(() => {
      this.irAlogin.nativeElement.click();
    }, 3500);
  }

  // cambiarpagina() {
  //   this.router.navigate(["/home"])

  // }
  // router.navigate(["/home"]);
}
