import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProspectoPage } from './prospecto.page';

const routes: Routes = [
  {
    path: '',
    component: ProspectoPage
  },
  {
    path: 'detalle-prospecto',
    loadChildren: () => import('./detalle-prospecto/detalle-prospecto.module').then( m => m.DetalleProspectoPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProspectoPageRoutingModule {}
