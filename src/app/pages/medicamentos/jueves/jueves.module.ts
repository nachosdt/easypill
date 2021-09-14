import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JuevesPageRoutingModule } from './jueves-routing.module';

import { JuevesPage } from './jueves.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JuevesPageRoutingModule
  ],
  declarations: [JuevesPage]
})
export class JuevesPageModule {}
