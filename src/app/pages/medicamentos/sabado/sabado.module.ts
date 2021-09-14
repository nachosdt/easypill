import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SabadoPageRoutingModule } from './sabado-routing.module';

import { SabadoPage } from './sabado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SabadoPageRoutingModule
  ],
  declarations: [SabadoPage]
})
export class SabadoPageModule {}
