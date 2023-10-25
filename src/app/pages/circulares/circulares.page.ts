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
      console.log(this.circulares);
    })
  }

  async abrirCircular(pos: any) {
    const tit = this.circulares[pos].titulo;
    const circular = await this.modalCtrl.create({
      component: CircularPage,
      componentProps: {
        titulo: tit
      }
    })
    await circular.present();
  }
}
