import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiercolesPage } from './miercoles.page';

const routes: Routes = [
  {
    path: '',
    component: MiercolesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiercolesPageRoutingModule {}
