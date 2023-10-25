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

  async getTareas<T>(nivel: any, grado: any, seccion: any, codigo: any) {
    return this.http.get<T>(`${asmsURL}API_tareas.php?request=tareas_materias&nivel=${nivel}&grado=${grado}&seccion=${seccion}&materia=${codigo}`);
  }

  async getCirculares<T>() {
    this.datosUsuario = await this.storage.get('datos');
    return this.http.get<T>(`${asmsURL}API_gestor_circulares.php?request=circulares&maestro=1`); //falta agregar el page
  }

  async getAlbumes<T>() {
    this.datosUsuario = await this.storage.get('datos');
    return this.http.get<T>(`${asmsURL}API_photos.php?request=lista_albumes&tipo=1&codigo=1`); //falta agregar el page
  }
}
