import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPage } from './landing.page';

const routes: Routes = [
  {
    path: '',
    component: LandingPage
  },  {
    path: 'landinglogin',
    loadChildren: () => import('./landinglogin/landinglogin.module').then( m => m.LandingloginPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingPageRoutingModule {}
