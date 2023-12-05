import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './guards/guard.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    canActivate: [GuardGuard],
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'actividades',
    loadChildren: () => import('./pages/actividades/actividades.module').then( m => m.ActividadesPageModule)
  },
  {
    path: 'actividad',
    loadChildren: () => import('./pages/actividad/actividad.module').then( m => m.ActividadPageModule)
  },
  {
    path: 'grados',
    loadChildren: () => import('./pages/grados/grados.module').then( m => m.GradosPageModule)
  },
  {
    path: 'tareas',
    loadChildren: () => import('./pages/tareas/tareas.module').then( m => m.TareasPageModule)
  },
  {
    path: 'postit',
    loadChildren: () => import('./pages/postit/postit.module').then( m => m.PostitPageModule)
  },
  {
    path: 'calificaciones',
    loadChildren: () => import('./pages/calificaciones/calificaciones.module').then( m => m.CalificacionesPageModule)
  },
  {
    path: 'circulares',
    loadChildren: () => import('./pages/circulares/circulares.module').then( m => m.CircularesPageModule)
  },
  {
    path: 'photos',
    loadChildren: () => import('./pages/photos/photos.module').then( m => m.PhotosPageModule)
  },
  {
    path: 'reportes',
    loadChildren: () => import('./pages/reportes/reportes.module').then( m => m.ReportesPageModule)
  },
  {
    path: 'soporte',
    loadChildren: () => import('./pages/soporte/soporte.module').then( m => m.SoportePageModule)
  },
  {
    path: 'circular',
    loadChildren: () => import('./pages/circular/circular.module').then( m => m.CircularPageModule)
  },
  {
    path: 'materias',
    loadChildren: () => import('./pages/materias/materias.module').then( m => m.MateriasPageModule)
  },
  {
    path: 'tareas-pend',
    loadChildren: () => import('./pages/tareas-pend/tareas-pend.module').then( m => m.TareasPendPageModule)
  },  {
    path: 'tab',
    loadChildren: () => import('./pages/padres/tab/tab.module').then( m => m.TabPageModule)
  },
  {
    path: 'notificaciones',
    loadChildren: () => import('./pages/padres/notificaciones/notificaciones.module').then( m => m.NotificacionesPageModule)
  },
  {
    path: 'pinboard',
    loadChildren: () => import('./pages/padres/pinboard/pinboard.module').then( m => m.PinboardPageModule)
  },
  {
    path: 'multimedia',
    loadChildren: () => import('./pages/padres/multimedia/multimedia.module').then( m => m.MultimediaPageModule)
  },
  {
    path: 'circulares',
    loadChildren: () => import('./pages/padres/circulares/circulares.module').then( m => m.CircularesPageModule)
  },
  {
    path: 'alumnos',
    loadChildren: () => import('./pages/alumnos/alumnos.module').then( m => m.AlumnosPageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
