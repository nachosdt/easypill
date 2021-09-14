import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JuevesPage } from './jueves.page';

const routes: Routes = [
  {
    path: '',
    component: JuevesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuevesPageRoutingModule {}
