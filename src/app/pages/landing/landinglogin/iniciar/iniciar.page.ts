import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

import { ModalController } from '@ionic/angular';
import { ModalsPage } from 'src/app/pages/modals/modals.page';
import { LoginService } from 'src/app/shared/login.service';
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
    public toast: ToastController) { }

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

  iniciarSesion(usuario) {
    // console.log("login correcto");

    // this.login.postLogin(usuario)
    //   .subscribe(
    //     res => {
    //       console.log(res);
    //       if (res.error == null) {

    //       }
    //       this.router.navigate(["/home"])

    //     },
    //     err => {
    //       console.log("soy el error");
    //       console.log(err);
    //     }

    //   )
    this.login.postLogin(usuario).subscribe((data) => {
      let resultado: any = {}
      resultado = data
      console.log(resultado);
      if (resultado.datos == null) {
        this.loginIncorrecto()
      } else {
        this.router.navigate(["/home"])
      }
    });
  }

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

