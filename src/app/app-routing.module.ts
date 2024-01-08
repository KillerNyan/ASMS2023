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
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
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
  },
  {
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
  {
    path: 'cali-alumnos',
    loadChildren: () => import('./pages/cali-alumnos/cali-alumnos.module').then( m => m.CaliAlumnosPageModule)
  },
  {
    path: 'post-sec',
    loadChildren: () => import('./pages/post-sec/post-sec.module').then( m => m.PostSecPageModule)
  },
  {
    path: 'detalle-postit',
    loadChildren: () => import('./pages/detalle-postit/detalle-postit.module').then( m => m.DetallePostitPageModule)
  },
  {
    path: 'nuevo-postit',
    loadChildren: () => import('./pages/nuevo-postit/nuevo-postit.module').then( m => m.NuevoPostitPageModule)
  },
  {
    path: 'detalles-alumno',
    loadChildren: () => import('./pages/detalles-alumno/detalles-alumno.module').then( m => m.DetallesAlumnoPageModule)
  },
  {
    path: 'detalles-tareas',
    loadChildren: () => import('./pages/detalles-tareas/detalles-tareas.module').then( m => m.DetallesTareasPageModule)
  },
  {
    path: 'alumnos-postit',
    loadChildren: () => import('./pages/alumnos-postit/alumnos-postit.module').then( m => m.AlumnosPostitPageModule)
  },
  {
    path: 'postit-por-alumno',
    loadChildren: () => import('./pages/postit-por-alumno/postit-por-alumno.module').then( m => m.PostitPorAlumnoPageModule)
  },
  {
    path: 'detalles-postit-alumno',
    loadChildren: () => import('./pages/detalles-postit-alumno/detalles-postit-alumno.module').then( m => m.DetallesPostitAlumnoPageModule)
  },
  {
    path: 'ver-imagenes',
    loadChildren: () => import('./pages/ver-imagenes/ver-imagenes.module').then( m => m.VerImagenesPageModule)
  },  {
    path: 'pagos-hijos',
    loadChildren: () => import('./pages/padres/pagos-hijos/pagos-hijos.module').then( m => m.PagosHijosPageModule)
  },
  {
    path: 'tareas-hijos',
    loadChildren: () => import('./pages/padres/tareas-hijos/tareas-hijos.module').then( m => m.TareasHijosPageModule)
  },
  {
    path: 'tab-hijos',
    loadChildren: () => import('./pages/hijos/tab-hijos/tab-hijos.module').then( m => m.TabHijosPageModule)
  },
  {
    path: 'multimedia-hijos',
    loadChildren: () => import('./pages/hijos/multimedia-hijos/multimedia-hijos.module').then( m => m.MultimediaHijosPageModule)
  },
  {
    path: 'circulares-hijos',
    loadChildren: () => import('./pages/hijos/circulares-hijos/circulares-hijos.module').then( m => m.CircularesHijosPageModule)
  },
  {
    path: 'actividades-hijos',
    loadChildren: () => import('./pages/hijos/actividades-hijos/actividades-hijos.module').then( m => m.ActividadesHijosPageModule)
  },




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
