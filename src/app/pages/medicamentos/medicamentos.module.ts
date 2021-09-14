import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicamentosPageRoutingModule } from './medicamentos-routing.module';

import { MedicamentosPage } from './medicamentos.page';
import { NavegacionPage } from '../navegacion/navegacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicamentosPageRoutingModule
  ],
  declarations: [MedicamentosPage, NavegacionPage]
})
export class MedicamentosPageModule { }
