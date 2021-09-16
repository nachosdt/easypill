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
  },
  {
    path: 'martes',
    loadChildren: () => import('./martes/martes.module').then( m => m.MartesPageModule)
  },
  {
    path: 'miercoles',
    loadChildren: () => import('./miercoles/miercoles.module').then( m => m.MiercolesPageModule)
  },
  {
    path: 'jueves',
    loadChildren: () => import('./jueves/jueves.module').then( m => m.JuevesPageModule)
  },
  {
    path: 'viernes',
    loadChildren: () => import('./viernes/viernes.module').then( m => m.ViernesPageModule)
  },
  {
    path: 'sabado',
    loadChildren: () => import('./sabado/sabado.module').then( m => m.SabadoPageModule)
  },
  {
    path: 'domingo',
    loadChildren: () => import('./domingo/domingo.module').then( m => m.DomingoPageModule)
  },
  {
    path: 'editarmedicamento',
    loadChildren: () => import('./editarmedicamento/editarmedicamento.module').then( m => m.EditarmedicamentoPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicamentosPageRoutingModule {}
