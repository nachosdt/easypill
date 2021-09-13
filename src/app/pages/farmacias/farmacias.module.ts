import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FarmaciasPageRoutingModule } from './farmacias-routing.module';

import { FarmaciasPage } from './farmacias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FarmaciasPageRoutingModule
  ],
  declarations: [FarmaciasPage]
})
export class FarmaciasPageModule {}
