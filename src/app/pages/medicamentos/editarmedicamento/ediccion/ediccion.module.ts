import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdiccionPageRoutingModule } from './ediccion-routing.module';
import { EdiccionPage } from './ediccion.page';
import { ComponentsModule } from '../../../../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdiccionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EdiccionPage]
})
export class EdiccionPageModule {}
