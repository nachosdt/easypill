import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicamentosPage } from './medicamentos.page';

const routes: Routes = [
  {
    path: '',
    component: MedicamentosPage
  },  {
    path: 'lunes',
    loadChildren: () => import('./lunes/lunes.module').then( m => m.LunesPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicamentosPageRoutingModule {}
