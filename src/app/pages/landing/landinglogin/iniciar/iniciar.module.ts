import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniciarPageRoutingModule } from './iniciar-routing.module';
import { IniciarPage } from './iniciar.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniciarPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IniciarPage]
})
export class IniciarPageModule {}
