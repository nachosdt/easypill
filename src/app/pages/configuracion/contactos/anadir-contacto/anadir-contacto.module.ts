import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnadirContactoPageRoutingModule } from './anadir-contacto-routing.module';
import { AnadirContactoPage } from './anadir-contacto.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnadirContactoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AnadirContactoPage]
})
export class AnadirContactoPageModule {}
