import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavegacionPageRoutingModule } from './navegacion-routing.module';

import { NavegacionPage } from './navegacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavegacionPageRoutingModule
  ],
  declarations: [NavegacionPage]
})
export class NavegacionPageModule {}
