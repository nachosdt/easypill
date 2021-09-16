import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Modal1Page } from './modal1.page';

const routes: Routes = [
  {
    path: '',
    component: Modal1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Modal1PageRoutingModule {}
