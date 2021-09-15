import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnadirContactoPage } from './anadir-contacto.page';

const routes: Routes = [
  {
    path: '',
    component: AnadirContactoPage
  },
  {
    path: 'contactos',
    loadChildren: () => import('../contactos.module').then( m => m.ContactosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnadirContactoPageRoutingModule {}
