import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerminosycondicionesPageRoutingModule } from './terminosycondiciones-routing.module';
import { TerminosycondicionesPage } from './terminosycondiciones.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerminosycondicionesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TerminosycondicionesPage]
})
export class TerminosycondicionesPageModule {}
