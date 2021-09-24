import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

import { ModalController } from '@ionic/angular';
import { ModalsPage } from 'src/app/pages/modals/modals.page';
import { LoginService } from 'src/app/shared/login.service';
import { ServicioGeneralService } from 'src/app/shared/servicio-general.service';

import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-iniciar',
  templateUrl: './iniciar.page.html',
  styleUrls: ['./iniciar.page.scss'],
})
export class IniciarPage implements OnInit {
  public usuario: Usuario = new Usuario()
  constructor(
    public location: Location,
    public modalController: ModalController,
    public login: LoginService,
    private router: Router,
    public toast: ToastController,
    public servicioGeneral: ServicioGeneralService
  ) { }

  nombreUsuario: string
  idUsuario: number;
  primeraVez: boolean = false;

  ngOnInit() {

  }

  onSubmit(form: NgForm) {
    this.usuario.email = form.value.email;
    this.usuario.contrasenia = form.value.contrasenia;
    this.iniciarSesion(this.usuario)
  }

  async recuperarPass() {

    const modal = await this.modalController.create({
      component: ModalsPage,
      componentProps: {
        'titulo': 'Recuperar contraseña',
        'mensaje': `En breve te enviaremos un email a ${this.usuario.email}`,
        'textoBoton': 'Continuar',
        'urlSalida': 'landing'
      }
    });
    return await modal.present();

  }

  goBack() {
    this.location.back();
  }

  iniciarSesion(usuario): string {

    this.login.postLogin(usuario).subscribe((data) => {
      let resultado: any = {}
      resultado = data
      console.log(resultado);

      // console.log(resultado.datos[0].nombre);
      // this.nombreUsuario = resultado.datos[0].nombre;
      if (resultado.datos === null) {
        this.loginIncorrecto()
      } else {
        this.nombreUsuario = resultado.datos[0].nombre;
        this.idUsuario = resultado.datos[0].idusuarios;
        console.log(this.nombreUsuario);
        this.router.navigate(["/inicio-onboarding"]);
        this.servicioGeneral.nombreUsuario = this.nombreUsuario;
        this.servicioGeneral.idUsuario = this.idUsuario;
        this.primeraVez = true;
        this.servicioGeneral.primeraVezServicio = this.primeraVez
        console.log(this.servicioGeneral.primeraVezServicio);





      }
      // console.log(this.nombreUsuario);

    });

    return this.nombreUsuario;
  }

  // getNombre(): string {
  //   return this.nombreUsuario;

  // }







  async loginIncorrecto() {
    const alerta = await this.toast.create({
      message: "Email o contraseña incorrectos",
      duration: 3000,
      position: 'top',
      color: "warning",

    });
    alerta.present();
  }


}

