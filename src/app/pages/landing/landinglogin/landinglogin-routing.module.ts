import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingloginPage } from './landinglogin.page';

const routes: Routes = [
  {
    path: '',
    component: LandingloginPage
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'iniciar',
    loadChildren: () => import('./iniciar/iniciar.module').then( m => m.IniciarPageModule)
  },  {
    path: 'iniciar-register',
    loadChildren: () => import('./iniciar-register/iniciar-register.module').then( m => m.IniciarRegisterPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingloginPageRoutingModule {}
