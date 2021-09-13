import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProspectoPageRoutingModule } from './prospecto-routing.module';

import { ProspectoPage } from './prospecto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProspectoPageRoutingModule
  ],
  declarations: [ProspectoPage]
})
export class ProspectoPageModule {}
