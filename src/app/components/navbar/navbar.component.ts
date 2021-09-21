import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {


  private subscriber: Subscription;
  public url: string;
  public mostrar: boolean = true;

  constructor(private router: Router) {

    this.subscriber = router.events.pipe
      (filter(event => event instanceof NavigationEnd)).subscribe((event) => {
        this.url = event['url'];
        console.log(this.url);
        this.mostrar = true;
        if (this.url == "/medicamentos/lunes") {
          this.mostrar = false;
          console.log(this.mostrar);

        }
        if (this.url == "/medicamentos/martes") {
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

  ngOnInit() { }

}

