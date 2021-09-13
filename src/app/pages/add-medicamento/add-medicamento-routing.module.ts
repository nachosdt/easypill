import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMedicamentoPage } from './add-medicamento.page';

const routes: Routes = [
  {
    path: '',
    component: AddMedicamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddMedicamentoPageRoutingModule {}
