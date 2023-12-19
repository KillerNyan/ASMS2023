import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';
import { DetallePostitPage } from '../detalle-postit/detalle-postit.page';
import { NuevoPostitPage } from '../nuevo-postit/nuevo-postit.page';

@Component({
  selector: 'app-postit',
  templateUrl: './postit.page.html',
  styleUrls: ['./postit.page.scss'],
})
export class PostitPage implements OnInit {

  @Input() gradoDesc: string = '';
  @Input() seccionDesc: string = '';
  @Input() grado: string = '';
  @Input() seccion: string = '';
  @Input() nivel: string = '';

  constructor(private modalCtrl: ModalController, private asmsSrvc: AsmsServiceService) { }

  postits: any[] = [];
  alumnos: any[] = [];
  showPostits: boolean = true;
  showAlumnos: boolean = false;

  async ngOnInit() {
    (await this.asmsSrvc.getPostit(this.grado, this.nivel, this.seccion)).subscribe((postits: any) => {
      if(postits != '') {
        this.postits = postits;
        console.log(postits)
      }
    });
    (await this.asmsSrvc.getAlumnos(this.grado, this.nivel, this.seccion)).subscribe((alumnos: any) => {
      this.alumnos = alumnos;
    })
  }

  async segmentChanged(evento:any){
    if(evento.detail.value == "todos"){
      this.showPostits = true;
      this.showAlumnos = false;
    }
    if(evento.detail.value == "alumnos"){
      this.showPostits = false;
      this.showAlumnos = true;
    }
  }

  async add() {
    const nuevo = await this.modalCtrl.create({
      component: NuevoPostitPage,
      componentProps: {

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
    const detalle = await this.modalCtrl.create({
      component: DetallePostitPage,
      componentProps: {
        titulo: tit,
        descripcion: desc,
        fecha: fec,
        alumno: alu,
        imagenes: img,
        archivos: docs,
      }
    })
    await detalle.present();
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
