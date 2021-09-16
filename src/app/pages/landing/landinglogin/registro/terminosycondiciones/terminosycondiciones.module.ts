import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerminosycondicionesPageRoutingModule } from './terminosycondiciones-routing.module';

import { TerminosycondicionesPage } from './terminosycondiciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerminosycondicionesPageRoutingModule
  ],
  declarations: [TerminosycondicionesPage]
})
export class TerminosycondicionesPageModule {}
