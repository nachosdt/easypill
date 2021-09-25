import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactosPageRoutingModule } from './contactos-routing.module';
import { ContactosPage } from './contactos.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ContactosPage]
})
export class ContactosPageModule {}
