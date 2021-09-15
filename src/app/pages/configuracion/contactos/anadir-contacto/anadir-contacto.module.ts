import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnadirContactoPageRoutingModule } from './anadir-contacto-routing.module';

import { AnadirContactoPage } from './anadir-contacto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnadirContactoPageRoutingModule
  ],
  declarations: [AnadirContactoPage]
})
export class AnadirContactoPageModule {}
