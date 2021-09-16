import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioOnboardingPageRoutingModule } from './inicio-onboarding-routing.module';

import { InicioOnboardingPage } from './inicio-onboarding.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioOnboardingPageRoutingModule
  ],
  declarations: [InicioOnboardingPage]
})

export class InicioOnboardingPageModule {}
