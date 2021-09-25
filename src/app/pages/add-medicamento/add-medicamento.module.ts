import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddMedicamentoPageRoutingModule } from './add-medicamento-routing.module';
import { AddMedicamentoPage } from './add-medicamento.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddMedicamentoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AddMedicamentoPage]
})
export class AddMedicamentoPageModule {}
