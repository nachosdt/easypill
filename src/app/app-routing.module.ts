import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'farmacias',
    loadChildren: () => import('./pages/farmacias/farmacias.module').then(m => m.FarmaciasPageModule)
  },
  {
    path: 'prospecto',
    loadChildren: () => import('./pages/prospecto/prospecto.module').then(m => m.ProspectoPageModule)
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./pages/configuracion/configuracion.module').then(m => m.ConfiguracionPageModule)
  },
  {
    path: 'medicamentos',
    loadChildren: () => import('./pages/medicamentos/medicamentos.module').then(m => m.MedicamentosPageModule)
  },
  {
    path: 'add-medicamento',
    loadChildren: () => import('./pages/add-medicamento/add-medicamento.module').then(m => m.AddMedicamentoPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingPageModule)
  },
  {
    path: 'navegacion',
    loadChildren: () => import('./pages/navegacion/navegacion.module').then(m => m.NavegacionPageModule)
  },
  {
    path: 'inicio-onboarding',
    loadChildren: () => import('./pages/inicio-onboarding/inicio-onboarding.module').then(m => m.InicioOnboardingPageModule)
  },
  {
    path: 'modals',
    loadChildren: () => import('./pages/modals/modals.module').then(m => m.ModalsPageModule)
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
