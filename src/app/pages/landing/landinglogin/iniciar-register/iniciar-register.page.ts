import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { LoginService } from 'src/app/shared/login.service';
import { ModalController } from '@ionic/angular';
import { ModalsPage } from 'src/app/pages/modals/modals.page';

@Component({
  selector: 'app-iniciar-register',
  templateUrl: './iniciar-register.page.html',
  styleUrls: ['./iniciar-register.page.scss'],
})
export class IniciarRegisterPage implements OnInit {

  public miEmail : string;

  constructor(public location:Location,private servicioLogin:LoginService, public modalController: ModalController) { }

  ngOnInit() {
  }

  public async enviarEmail(form:NgForm){
    this.miEmail=form.value.email;
    let respuesta = this.servicioLogin.recuperarContrasenia(this.miEmail);  
    respuesta.subscribe(async (resultado:any)=> {
      if (resultado.datos.emailEnviado) {
        const modal = await this.modalController.create({
          component: ModalsPage,
          componentProps: {
            'titulo': 'Nueva contraseña creada',
            'mensaje': `Se acaba de enviar un email a la dirección indicada con una nueva contraseña provisional.`,
            'textoBoton': 'Continuar',
            'urlSalida' : 'landing/landinglogin/iniciar'
          }
        });
        return await modal.present();
      } else {
        const modal = await this.modalController.create({
          component: ModalsPage,
          componentProps: {
            'titulo': 'No existe ningún usuario registrado con ese email',
            'mensaje': `Por favor, introduzca la dirección correcta o registrese.`,
            'textoBoton': 'Continuar',
            'urlSalida' : 'landing/landinglogin/iniciar'
          }
        });
        return await modal.present();
      }
    });
  }
  
  goBack(){
    this.location.back();
  }

}
