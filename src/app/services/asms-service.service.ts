import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage-angular';

const asmsURL = environment.asmsURL;

@Injectable({
  providedIn: 'root'
})
export class AsmsServiceService {

  data = null;
  datosUsuario: any;
  datosActividad: any;

  constructor(private http: HttpClient, private storage: Storage) {
    this.storage.create();
   }

  async getActividades<T>(){
    this.datosUsuario = await this.storage.get('datos');
    return this.http.get<T>(`${asmsURL}API_gestor_actividades.php?request=actividades&tipo=${this.datosUsuario.tipo_usuario}`);
  }

  async getActividad<T>(codigo: any){
    this.datosActividad = await this.storage.get('datos');
    return this.http.get<T>(`${asmsURL}API_gestor_actividades.php?request=actividad&codigo=${codigo}`);
  }

  async getSecciones<T>() {
    this.datosUsuario = await this.storage.get('datos');
    return this.http.get<T>(`${asmsURL}API_alumnos.php?request=usuario_secciones&tipo=${this.datosUsuario.tipo_usuario}&codigo=${this.datosUsuario.tipo_codigo}`);
  }

  async getMaterias<T>(nivel: any, grado: any) {
    return this.http.get<T>(`${asmsURL}API_tareas.php?request=materias&nivel=${nivel}&grado=${grado}`);
  }

  async getTareas<T>(nivel: any, grado: any, seccion: any, codigoMateria: any) {
    return this.http.get<T>(`${asmsURL}API_tareas.php?request=tareas_materias&nivel=${nivel}&grado=${grado}&seccion=${seccion}&materia=${codigoMateria}`);
  }

  async getCirculares<T>(codigoMaestro: any, page: any) {
    this.datosUsuario = await this.storage.get('datos');
    return this.http.get<T>(`${asmsURL}API_gestor_circulares.php?request=circulares&maestro=${codigoMaestro}&page=${page}`);
  }

  async getCircular<T>(codigo: any) {
    this.datosUsuario = await this.storage.get('datos');
    return this.http.get<T>(`${asmsURL}API_gestor_circulares.php?request=circular&codigo=${codigo}`);
  }

  async getAlbumes<T>() {
    this.datosUsuario = await this.storage.get('datos');
    return this.http.get<T>(`${asmsURL}API_photos.php?request=lista_albumes&tipo=1&codigo=1`);
  }

  async getAlumnos<T>(grado: any, nivel: any, seccion: any) {
    return this.http.get<T>(`${asmsURL}API_alumnos.php?request=lista_alumnos&nivel=${nivel}&grado=${grado}&seccion=${seccion}`);
  }

  async getDetallesAlumno<T>(cui: any) {
    return this.http.get<T>(`${asmsURL}API_alumnos.php?request=alumno_perfil&cui=${cui}`);
  }

  async getPostit<T>(maestro:any, grado: any, nivel: any, seccion: any, page: any) {
    return this.http.get<T>(`${asmsURL}API_gestor_pinboard.php?request=postits_mestro&maestro=${maestro}&nivel=${nivel}&grado=${grado}&seccion=${seccion}&page=${page}`);
  }

  async getPostitPorAlumno<T>(grado: any, nivel: any, seccion: any, codAlu: any, tipoUsu: any, codMaestro: any) {
    return this.http.get<T>(`${asmsURL}API_gestor_pinboard.php?request=postits_alumno&nivel=${nivel}&grado=${grado}&seccion=${seccion}&alumno=${codAlu}&tipo_usuario=${tipoUsu}&usuario=${codMaestro}`);
  }

  async getDetallesTareas<T>(codigo: any, alumno: any, situacion: any) {
    return this.http.get<T>(`${asmsURL}API_tareas.php?request=tarea&codigo=${codigo}&alumno=${alumno}&situacion=${situacion}`);
  }

  //API's Padres

  async getImagenes<T>() {
    return this.http.get<T>(`${asmsURL}API_util.php?request=images`);
  }

  async getHijos<T>(tipoUsu: any, codigo: any) {
    return this.http.get<T>(`${asmsURL}API_videoclases.php?request=hijos&tipo=${tipoUsu}&codigo=${codigo}`);
  }

  async getNotificaciones<T>(usu: any, tipo: any, alumno: any, page: any) {
    return this.http.get<T>(`${asmsURL}API_pushup_notification.php?request=list&user_id=${usu}&type=${tipo}&alumno=${alumno}&page=${page}`);
  }

  async getPinboardPadre<T>(hijos: any, page: any) {
    return this.http.get<T>(`${asmsURL}API_informacion.php?request=pinboard&alumnos=${hijos}&page=${page}`);
  }

  async getDetallePostItPadres<T>(codigo: any) {
    return this.http.get<T>(`${asmsURL}API_informacion.php?request=detalle_pinboard&codigo=${codigo}`);
  }

  async getCircularesPadre<T>(hijos: any, codigo: any, page: any) {
    return this.http.get<T>(`${asmsURL}API_informacion.php?request=circulares&alumnos=${hijos}&pdi_usuario=${codigo}&page=${page}`);
  }

  async getDetalleCircularPadre<T>(codigo: any, tipoUsu: any) {
    return this.http.get<T>(`${asmsURL}API_informacion.php?request=circular&codigo=${codigo}&pdi_usuario=${tipoUsu}`);
  }

  async autorizacionCircular<T>(codigo: any, codigoPadre: any, autorizacion: any) {
    return this.http.get<T>(`${asmsURL}API_informacion.php?request=circular_autorizacion&codigo=${codigo}&pdi=${codigoPadre}&autorizacion=${autorizacion}`);
  }

  //API_pushup_notification.php?request=list&user_id=2&type=&alumno=&page=0

}
