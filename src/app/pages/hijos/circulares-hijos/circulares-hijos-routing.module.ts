import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CircularesHijosPage } from './circulares-hijos.page';

const routes: Routes = [
  {
    path: '',
    component: CircularesHijosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CircularesHijosPageRoutingModule {}
