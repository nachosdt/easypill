import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DomingoPage } from './domingo.page';

const routes: Routes = [
  {
    path: '',
    component: DomingoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DomingoPageRoutingModule {}
