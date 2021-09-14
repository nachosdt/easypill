import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiercolesPageRoutingModule } from './miercoles-routing.module';

import { MiercolesPage } from './miercoles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiercolesPageRoutingModule
  ],
  declarations: [MiercolesPage]
})
export class MiercolesPageModule {}
