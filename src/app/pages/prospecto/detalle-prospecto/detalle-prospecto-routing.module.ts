import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleProspectoPage } from './detalle-prospecto.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleProspectoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleProspectoPageRoutingModule {}
