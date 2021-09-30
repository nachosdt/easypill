import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { Animation, AnimationController } from '@ionic/angular';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  @ViewChild('imagen', { read: ElementRef, static: true }) imagen: ElementRef;
  @ViewChild('marca', { read: ElementRef, static: true }) marca: ElementRef;
  @ViewChild('botones', { read: ElementRef, static: true }) botones: ElementRef;

  constructor(private router: Router, private animationCtrl: AnimationController) {

  }

  ngOnInit() {
    const animation1: Animation = this.animationCtrl.create()
      .addElement(this.imagen.nativeElement)
      .duration(500)
      .fromTo('opacity', '1', '0');
    const animation2: Animation = this.animationCtrl.create()
      .addElement(this.marca.nativeElement)
      .duration(1200)
      .easing("ease-in-out")
      .fromTo('transform', 'translateY(0px)', 'translateY(-200px)');
    const animation3: Animation = this.animationCtrl.create()
      .addElement(this.botones.nativeElement)
      .duration(1000)
      .fromTo('opacity', '0', '1')
      .fromTo('transform', 'translateY(40px)', 'translateY(0px)');

    setTimeout(() => {
      animation1.play();
    }, 1000);
    setTimeout(() => {
      animation2.play();
      this.botones.nativeElement.style.display = "flex";
      animation3.play();
    }, 900);
  }
}
