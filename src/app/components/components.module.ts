import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardMedicinaComponent } from './cardMedicina/card-medicina.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';




@NgModule({
  declarations: [CardMedicinaComponent, NavbarComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [CardMedicinaComponent, NavbarComponent]
})
export class ComponentsModule { }
