import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';
import { DetallePostitPage } from '../detalle-postit/detalle-postit.page';
import { NuevoPostitPage } from '../nuevo-postit/nuevo-postit.page';
import { PostitPorAlumnoPage } from '../postit-por-alumno/postit-por-alumno.page';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-postit',
  templateUrl: './postit.page.html',
  styleUrls: ['./postit.page.scss'],
})
export class PostitPage implements OnInit {

  datosUsuario: any;
  codigoMaestro: string = '';
  page: number = 0;
  @Input() gradoDesc: string = '';
  @Input() seccionDesc: string = '';
  @Input() grado: string = '';
  @Input() seccion: string = '';
  @Input() nivel: string = '';

  constructor(private modalCtrl: ModalController, private asmsSrvc: AsmsServiceService, private strg: Storage) { }

  postits: any[] = [];
  alumnos: any[] = [];
  showPostits: boolean = true;
  showAlumnos: boolean = false;

  async ngOnInit() {
    this.datosUsuario = await this.strg.get('datos');
    this.codigoMaestro = this.datosUsuario.tipo_codigo;
    (await this.asmsSrvc.getPostit(this.codigoMaestro, this.grado, this.nivel, this.seccion, this.page)).subscribe((postits: any) => {
      if (postits != '') {
        this.postits = postits;
      }
    });
    (await this.asmsSrvc.getAlumnos(this.grado, this.nivel, this.seccion)).subscribe((alumnos: any) => {
      this.alumnos = alumnos;
    })
  }

  async segmentChanged(evento: any) {
    if (evento.detail.value == "todos") {
      this.showPostits = true;
      this.showAlumnos = false;
    }
    if (evento.detail.value == "alumnos") {
      this.showPostits = false;
      this.showAlumnos = true;
    }
  }

  async add() {
    const grad = this.grado;
    const secc = this.seccion;
    const niv = this.nivel;
    const nuevo = await this.modalCtrl.create({
      component: NuevoPostitPage,
      componentProps: {
        grado: grad,
        seccion: secc,
        nivel: niv,
      }
    })
    await nuevo.present();
  }

  async detallePostit(pos1: any, pos2: any) {
    const tit = this.postits[pos1].date_postit[pos2].titulo;
    const desc = this.postits[pos1].date_postit[pos2].descripcion;
    const fec = this.postits[pos1].date_postit[pos2].fecha;
    const alu = this.postits[pos1].date_postit[pos2].alumno_name;
    const img = this.postits[pos1].date_postit[pos2].imagenes;
    const docs = this.postits[pos1].date_postit[pos2].archivos;
    const maes = this.postits[pos1].date_postit[pos2].post_maestro;
    const detalle = await this.modalCtrl.create({
      component: DetallePostitPage,
      componentProps: {
        titulo: tit,
        descripcion: desc,
        fecha: fec,
        alumno: alu,
        imagenes: img,
        archivos: docs,
        maestro: maes
      }
    })
    await detalle.present();
  }

  async postitPorAlumno(pos: any) {
    const niv = this.nivel;
    const grad = this.grado;
    const secc = this.seccion;
    const nom = this.alumnos[pos].nombre;
    const codAlu = this.alumnos[pos].cui;
    const pagina = await this.modalCtrl.create({
      component: PostitPorAlumnoPage,
      componentProps: {
        nivel: niv,
        grado: grad,
        seccion: secc,
        codigoAlumno: codAlu,
        nombre: nom
      }
    })
    await pagina.present();
  }

  async onIonInfinite(ev: any) {
    this.page = this.page + 1;
    (await this.asmsSrvc.getPostit(this.codigoMaestro, this.grado, this.nivel, this.seccion, this.page)).subscribe((postits: any) => {
      if (Object.prototype.toString.call(postits) === '[object Array]') {
        this.postits.push(...postits);
      }
      (ev).target.complete();
    });
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
