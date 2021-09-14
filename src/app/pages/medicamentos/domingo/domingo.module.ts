import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DomingoPageRoutingModule } from './domingo-routing.module';

import { DomingoPage } from './domingo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DomingoPageRoutingModule
  ],
  declarations: [DomingoPage]
})
export class DomingoPageModule {}
