import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonIcon } from '@ionic/angular';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {
  
  public listaTitulos:string[] = ["HOME","TRATAMIENTOS","AÑADIR MEDICAMENTOS","BUSCAR FARMACIAS","CONSULTAR PROSPECTOS"];
  public titulo:string;
  public slideIndex:number;
  public distancia:string[] = ["12vw","27vw","47vw","64vw","83vw"];
  constructor() { 
    this.slideIndex = 1;    
  }

  ngOnInit() {
    this.showSlides(this.slideIndex);
  }

  public arrowTexto(n:number):void{
    let i: number; 
  }

  public plusSlides(n:number):void {
    this.showSlides(this.slideIndex += n);    
  }

  public currentSlide(n:number):void {
    this.showSlides(this.slideIndex = n);
  }

  public showSlides(n:number):void {
    let i:number;
    let slides:HTMLCollectionOf<Element>
    slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {this.slideIndex = 1}
      if (n < 1) {this.slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {        
        if (slides[i].classList.contains("mostrar")) {slides[i].classList.toggle("mostrar");}
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
    document.getElementById("flecha").style.left = this.distancia[this.slideIndex-1];
    slides[this.slideIndex-1].className += " mostrar";
    dots[this.slideIndex-1].className += " active";
    this.titulo = this.listaTitulos[this.slideIndex-1];
  }

}
