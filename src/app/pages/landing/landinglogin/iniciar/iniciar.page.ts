import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

import { ModalController } from '@ionic/angular';
import { ModalsPage } from 'src/app/pages/modals/modals.page';
import { LoginService } from 'src/app/shared/login.service';
import { ServicioGeneralService } from 'src/app/shared/servicio-general.service';
import { MedicamentosService } from 'src/app/shared/medicamentos.service';
import { ContactosService } from 'src/app/shared/contactos.service';

import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-iniciar',
  templateUrl: './iniciar.page.html',
  styleUrls: ['./iniciar.page.scss'],
})
export class IniciarPage implements OnInit {

  public nombreCabecera:string = "Iniciar sesión";
  public icono:boolean = true;
  public rutaAtras:any = "/landing/landinglogin";  
  public email:string;
  public contrasenia:string;
  public primeraVez: boolean = false;

  constructor(
    public location: Location,
    public modalController: ModalController,
    public login: LoginService,
    private router: Router,
    public toast: ToastController,
    private servicioGeneral: ServicioGeneralService,
    private medicamentoService: MedicamentosService,
    private contactoService:ContactosService
  ) { }  

  ngOnInit() {

  }

  onSubmit(form: NgForm) {    
    this.login.postLogin(form.value.email,form.value.contrasenia)
    .subscribe(async (respuesta)=>{
      console.log(respuesta);
      if (respuesta.datos===null) {
        const modal = await this.modalController.create({
          component: ModalsPage,
          componentProps: {
            'titulo': 'Email o contraseña incorrectos',
            'mensaje': `Por favor, asegurese de introducir correctamente el email y la contraseña.`,
            'textoBoton': 'Continuar',
            'urlSalida': 'landing/landinlogin/'
          }
        });
        return await modal.present();
      } else {
        // Carga de datos del usuario      
        this.servicioGeneral.nombreUsuario = respuesta.datos[0].nombre;
        this.servicioGeneral.idUsuario = respuesta.datos[0].idusuarios;
        this.servicioGeneral.emailUsuario = respuesta.datos[0].email;
        this.servicioGeneral.fechaNacUsuario = respuesta.datos[0].fechaNacimiento.split(0,10);
        this.servicioGeneral.tomasDeHoy = await this.servicioGeneral.getTomasHoy();
        this.medicamentoService.medicamentos = await this.medicamentoService.getTodosLosMedicamentos(this.servicioGeneral.idUsuario);
        this.contactoService.contactos = await this.contactoService.getContacto();
        this.primeraVez = true;
        this.servicioGeneral.primeraVezServicio = this.primeraVez;
        this.router.navigate(["/inicio-onboarding"]);        
      }

    });
  }  
}

