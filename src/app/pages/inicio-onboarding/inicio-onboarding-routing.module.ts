import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnboardingPageModule } from './onboarding/onboarding.module';
import { InicioOnboardingPage } from './inicio-onboarding.page';

const routes: Routes = [
  {
    path: '',
    component: InicioOnboardingPage
  },
  {
    path: 'onboarding',
    loadChildren: () => import('./onboarding/onboarding.module').then( m => m.OnboardingPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioOnboardingPageRoutingModule {}
