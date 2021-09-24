import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


// import { ModalController } from '@ionic/angular';
import { ServicioGeneralService } from '../../shared/servicio-general.service';


@Component({
  selector: 'app-inicio-onboarding',
  templateUrl: './inicio-onboarding.page.html',
  styleUrls: ['./inicio-onboarding.page.scss'],
})
export class InicioOnboardingPage implements OnInit {

  constructor(public router: Router, public servicioGeneral: ServicioGeneralService) { }



  ngOnInit() {
  }


  bntOmitir() {
    console.log(this.servicioGeneral.primeraVezServicio);
    if (this.servicioGeneral.primeraVezServicio == true) {
      this.router.navigate(["/configuracion/contactos/anadir-contacto"])


    } else {
      this.router.navigate(["/home"])
    }
  }
}


