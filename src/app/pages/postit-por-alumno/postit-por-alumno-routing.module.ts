import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostitPorAlumnoPage } from './postit-por-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: PostitPorAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostitPorAlumnoPageRoutingModule {}
