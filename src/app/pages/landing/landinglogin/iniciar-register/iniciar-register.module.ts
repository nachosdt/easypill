import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniciarRegisterPageRoutingModule } from './iniciar-register-routing.module';

import { IniciarRegisterPage } from './iniciar-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniciarRegisterPageRoutingModule
  ],
  declarations: [IniciarRegisterPage]
})
export class IniciarRegisterPageModule {}
