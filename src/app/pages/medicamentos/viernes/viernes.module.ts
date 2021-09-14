import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViernesPageRoutingModule } from './viernes-routing.module';

import { ViernesPage } from './viernes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViernesPageRoutingModule
  ],
  declarations: [ViernesPage]
})
export class ViernesPageModule {}
