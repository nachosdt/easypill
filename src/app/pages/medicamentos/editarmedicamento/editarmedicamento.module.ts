import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarmedicamentoPageRoutingModule } from './editarmedicamento-routing.module';
import { EditarmedicamentoPage } from './editarmedicamento.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarmedicamentoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EditarmedicamentoPage]
})
export class EditarmedicamentoPageModule {}
