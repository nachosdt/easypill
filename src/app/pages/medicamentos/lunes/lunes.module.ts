import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LunesPageRoutingModule } from './lunes-routing.module';

import { LunesPage } from './lunes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LunesPageRoutingModule
  ],
  declarations: [LunesPage]
})
export class LunesPageModule {}
