import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddMedicamentoPageRoutingModule } from './add-medicamento-routing.module';

import { AddMedicamentoPage } from './add-medicamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddMedicamentoPageRoutingModule
  ],
  declarations: [AddMedicamentoPage]
})
export class AddMedicamentoPageModule {}
