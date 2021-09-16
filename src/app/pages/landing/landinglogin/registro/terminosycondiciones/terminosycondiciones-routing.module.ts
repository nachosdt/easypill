import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TerminosycondicionesPage } from './terminosycondiciones.page';

const routes: Routes = [
  {
    path: '',
    component: TerminosycondicionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TerminosycondicionesPageRoutingModule {}
