import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PinboardPage } from './pinboard.page';

const routes: Routes = [
  {
    path: '',
    component: PinboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PinboardPageRoutingModule {}
