import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SabadoPage } from './sabado.page';

const routes: Routes = [
  {
    path: '',
    component: SabadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SabadoPageRoutingModule {}
