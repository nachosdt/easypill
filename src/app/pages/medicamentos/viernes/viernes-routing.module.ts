import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViernesPage } from './viernes.page';

const routes: Routes = [
  {
    path: '',
    component: ViernesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViernesPageRoutingModule {}
