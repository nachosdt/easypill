import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandingloginPageRoutingModule } from './landinglogin-routing.module';

import { LandingloginPage } from './landinglogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandingloginPageRoutingModule
  ],
  declarations: [LandingloginPage]
})
export class LandingloginPageModule {}
