import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavegacionPage } from './navegacion.page';

const routes: Routes = [
  {
    path: '',
    component: NavegacionPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import("src/app/home/home.module").then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'medicamentos',
        children: [
          {
            path: '',
            loadChildren: () => import("../medicamentos/medicamentos.module").then(m => m.MedicamentosPageModule)
          }
        ]
      },
      {
        path: 'farmacias',
        children: [
          {
            path: '',
            loadChildren: () => import("../farmacias/farmacias.module").then(m => m.FarmaciasPageModule)
          }
        ]
      },

      {
        path: 'prospectos',
        children: [
          {
            path: '',
            loadChildren: () => import("../prospecto/prospecto.module").then(m => m.ProspectoPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavegacionPageRoutingModule { }
