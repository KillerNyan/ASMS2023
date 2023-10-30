import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';
import { CircularPage } from '../circular/circular.page';

@Component({
  selector: 'app-circulares',
  templateUrl: './circulares.page.html',
  styleUrls: ['./circulares.page.scss'],
})
export class CircularesPage implements OnInit {

  circulares: any[] = [];

  constructor( private asmsSrvc: AsmsServiceService, private modalCtrl: ModalController ) { }

  async ngOnInit() {
    (await this.asmsSrvc.getCirculares()).subscribe( (circulares: any) => {
      this.circulares = circulares;
    })
  }

  async abrirCircular(pos: any) {
    const tit = this.circulares[pos].titulo;
    const fec = this.circulares[pos].fecha_publicacion;
    const hor = this.circulares[pos].hora_publicacion;
    const desc = this.circulares[pos].descripcion;
    const down = this.circulares[pos].descarga;
    const link = this.circulares[pos].link;
    const aut = this.circulares[pos].requiere_autorizacion;
    const circular = await this.modalCtrl.create({
      component: CircularPage,
      componentProps: {
        titulo: tit,
        fecha: fec,
        hora: hor,
        descripcion: desc,
        descarga: down,
        link: link,
        autorizacion: aut
      }
    })
    await circular.present();
  }
}
