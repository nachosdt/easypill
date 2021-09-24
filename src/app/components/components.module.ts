import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { MockupComponent } from './mockup/mockup.component';




@NgModule({
  declarations: [ NavbarComponent, CabeceraComponent, MockupComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [ NavbarComponent, CabeceraComponent, MockupComponent]
})
export class ComponentsModule { }
