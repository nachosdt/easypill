import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Modal1PageRoutingModule } from './modal1-routing.module';

import { Modal1Page } from './modal1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Modal1PageRoutingModule
  ],
  declarations: [Modal1Page]
})
export class Modal1PageModule {}
