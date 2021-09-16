import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarmedicamentoPage } from './editarmedicamento.page';

const routes: Routes = [
  {
    path: '',
    component: EditarmedicamentoPage
  },  {
    path: 'ediccion',
    loadChildren: () => import('./ediccion/ediccion.module').then( m => m.EdiccionPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarmedicamentoPageRoutingModule {}
