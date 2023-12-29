import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

import { register } from 'swiper/element/bundle';
import { VerImagenesPage } from '../ver-imagenes/ver-imagenes.page';

register();

@Component({
  selector: 'app-detalle-postit',
  templateUrl: './detalle-postit.page.html',
  styleUrls: ['./detalle-postit.page.scss'],
})
export class DetallePostitPage implements OnInit {

  datosUsuario: any;
  @Input() titulo: string = '';
  @Input() descripcion: string = '';
  @Input() fecha: string = '';
  @Input() alumno: string = '';
  @Input() imagenes: any[] = [];
  @Input() archivos: any[] = [];
  @Input() maestro: any[] = [];

  constructor( private modalCtrl: ModalController, private strg: Storage ) { }

  disabled: boolean = true;

  async ngOnInit() {
    this.datosUsuario = await this.strg.get('datos');
    if (this.datosUsuario.tipo_codigo == this.maestro){
      this.disabled = false;
    }
  }

  adjuntarArchivos(){

  }

  async verImg(img: any) {
    const verImagen = await this.modalCtrl.create({
      component: VerImagenesPage,
      componentProps: {
        img
      },
      cssClass: 'transparent-modal'
    });
    await verImagen.present();
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
