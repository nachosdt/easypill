import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdiccionPage } from './ediccion.page';

const routes: Routes = [
  {
    path: '',
    component: EdiccionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdiccionPageRoutingModule {}
