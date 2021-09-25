import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleProspectoPageRoutingModule } from './detalle-prospecto-routing.module';
import { DetalleProspectoPage } from './detalle-prospecto.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleProspectoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DetalleProspectoPage]
})
export class DetalleProspectoPageModule {}
