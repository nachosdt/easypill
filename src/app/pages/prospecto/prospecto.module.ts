import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from 'src/app/components/components.module';

import { ProspectoPageRoutingModule } from './prospecto-routing.module';

import { ProspectoPage } from './prospecto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ProspectoPageRoutingModule,
    // RouterModule.forChild([
    //   {
    //     path: '',
    //     component: CardMedicinaComponent
    //   }
    // ])
  ],
  declarations: [
    ProspectoPage
  ]
})
export class ProspectoPageModule {}
