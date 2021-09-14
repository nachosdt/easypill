import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LunesPage } from './lunes.page';

const routes: Routes = [
  {
    path: '',
    component: LunesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LunesPageRoutingModule {}
