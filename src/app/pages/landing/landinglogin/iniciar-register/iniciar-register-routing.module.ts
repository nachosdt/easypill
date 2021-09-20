import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniciarRegisterPage } from './iniciar-register.page';

const routes: Routes = [
  {
    path: '',
    component: IniciarRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniciarRegisterPageRoutingModule {}
