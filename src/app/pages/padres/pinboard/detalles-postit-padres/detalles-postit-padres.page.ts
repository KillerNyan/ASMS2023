import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VerImagenesPage } from 'src/app/pages/ver-imagenes/ver-imagenes.page';
import { AsmsServiceService } from 'src/app/services/asms-service.service';

import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-detalles-postit-padres',
  templateUrl: './detalles-postit-padres.page.html',
  styleUrls: ['./detalles-postit-padres.page.scss'],
})
export class DetallesPostitPadresPage implements OnInit {

  detallesPostit: any[] = [];
  @Input() codigoPostit: string = '';
  target: string = '';

  constructor( private modalCtrl: ModalController, private asmsSrvc: AsmsServiceService) { }

  async ngOnInit() {
    (await this.asmsSrvc.getDetallePostItPadres(this.codigoPostit)).subscribe((detalles: any) => {
      this.detallesPostit = detalles;
      this.target = this.detallesPostit[0].target
      console.log(detalles);
    })
  }

  async verImg(img: any) {
    const pagina = await this.modalCtrl.create({
      component: VerImagenesPage,
      componentProps: {
        img,
      }
    })
    await pagina.present();
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
