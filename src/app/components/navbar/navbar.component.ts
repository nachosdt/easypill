import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Geolocation } from '@ionic-native/geolocation';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {


  private subscriber: Subscription;
  public url: string;
  public mostrar: boolean = true;
  public mostrarIconoHome: string = "soyUnValor"
  public mostrarIconoMedicamentos: string = "soyUnValor"
  public mostrarIconoFarmacias: string = "soyUnValor"
  public mostrarIconoProspectos: string = "soyUnValor"


  public homeIconoAnimacion: string = "";
  public medicamentosIconoAnimacion: string = "";
  public farmaciasIconoAnimacion: string = "";
  public prospectosIconoAnimacion: string = "";



  constructor(private router: Router) {

    this.subscriber = router.events.pipe
      (filter(event => event instanceof NavigationEnd)).subscribe((event) => {
        this.url = event['url'];
        console.log(this.url);
        this.mostrar = true;

        /// para mostrar el icono de la Home cuando comienza la aplicación
        if (this.url == "/home") {
          this.mostrarIconoHome = "mostrarHome"

        } else {
          this.mostrarIconoHome = "ocultarHome"
          this.homeIconoAnimacion = "";

        }
        /// mostrar el icono de Medicamentos
        if (this.url == "/medicamentos") {
          this.mostrarIconoMedicamentos = "mostrarMedicamentos"

        } else {
          this.mostrarIconoMedicamentos = "ocultarMedicamentos";
          this.medicamentosIconoAnimacion = "";

        }
        /// mostrar el icono de Farmacias
        if (this.url == "/farmacias") {
          this.mostrarIconoFarmacias = "mostrarFarmacias"

        } else {
          this.mostrarIconoFarmacias = "ocultarFarmacias"
          this.farmaciasIconoAnimacion = "";

        }

        /// mostrar el icono de Farmacias
        if (this.url == "/prospecto") {
          this.mostrarIconoProspectos = "mostrarFarmacias"

        } else {
          this.mostrarIconoProspectos = "ocultarFarmacias"
          this.prospectosIconoAnimacion = "";

        }

        ////////////////////////////

        if (this.url == "/medicamentos/lunes") {
          this.mostrar = false;
          console.log(this.mostrar);

        }
        if (this.url == "/medicamentos/martes") {
          this.mostrar = false;
          console.log(this.mostrar);

        }
        if (this.url == "/") {
          this.mostrar = false;
          console.log(this.mostrar);

        }
        if (this.url == "/medicamentos/miercoles") {
          this.mostrar = false;
          console.log(this.mostrar);

        }
        if (this.url == "/medicamentos/jueves") {
          this.mostrar = false;
          console.log(this.mostrar);

        }
        if (this.url == "/add-medicamento") {
          this.mostrar = false;
        }
        if (this.url == "/configuracion") {
          this.mostrar = false;
        }
        if (this.url == "/landing") {
          this.mostrar = false;
        }
        if (this.url == "/landing/landinglogin") {
          this.mostrar = false;
        }
        if (this.url == "/landing/landinglogin/iniciar") {
          this.mostrar = false;
        }
        if (this.url == "/landing/landinglogin/registro") {
          this.mostrar = false;
        }
        if (this.url == "/medicamentos/editarmedicamento") {
          this.mostrar = false;
        }
        if (this.url == "/prospecto/detalle-prospecto") {
          this.mostrar = false;
        }
        if (this.url == "/configuracion/perfil") {
          this.mostrar = false;
        }
        if (this.url == "/configuracion/perfil/editar-perfil") {
          this.mostrar = false;
        }
        if (this.url == "/configuracion/contactos") {
          this.mostrar = false;
        }

        if (this.url == "/configuracion/contactos/anadir-contacto") {
          this.mostrar = false;
        }
        if (this.url == "/configuracion/contactos/contacto") {
          this.mostrar = false;
        }

        if (this.url == "/inicio-onboarding") {
          this.mostrar = false;
        }
        if (this.url == "/inicio-onboarding/onboarding") {
          this.mostrar = false;
        }
        if (this.url == "/landing/landinglogin/registro/terminosycondiciones") {
          this.mostrar = false;
        }

        if (this.url == "/landing/landinglogin/iniciar-register") {
          this.mostrar = false;
        }

        if (this.url == "/medicamentos/editarmedicamento/ediccion") {
          this.mostrar = false;
        }


      });



  }


  public animacionIconoHome() {

    this.homeIconoAnimacion = "homeIcon";

  }



  public animacionMedicamentosHome() {

    this.medicamentosIconoAnimacion = "medicamentos";

  }


  public animacionFarmaciasIcono() {

    this.farmaciasIconoAnimacion = "pharmacy";

  }



  public animacionProspectosIcono() {

    this.prospectosIconoAnimacion = "prospectos";

  }


  ngOnInit() { }

}

