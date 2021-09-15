import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardMedicinaComponent } from './cardMedicina/card-medicina.component';



@NgModule({
  declarations: [CardMedicinaComponent],
  imports: [
    CommonModule
  ],
  exports:[CardMedicinaComponent]
})
export class ComponentsModule { }
