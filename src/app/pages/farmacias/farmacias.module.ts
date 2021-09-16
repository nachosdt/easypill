import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FarmaciasPageRoutingModule } from './farmacias-routing.module';
import { FarmaciasPage } from './farmacias.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FarmaciasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FarmaciasPage]
})
export class FarmaciasPageModule {}
