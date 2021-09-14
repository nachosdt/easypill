import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MartesPageRoutingModule } from './martes-routing.module';

import { MartesPage } from './martes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MartesPageRoutingModule
  ],
  declarations: [MartesPage]
})
export class MartesPageModule {}
