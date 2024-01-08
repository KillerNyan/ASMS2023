import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';

import { register } from 'swiper/element/bundle';
import { VerImagenesPage } from '../ver-imagenes/ver-imagenes.page';
import { Storage } from '@ionic/storage-angular';
import { DetallePhotoAlbumPage } from './detalle-photo-album/detalle-photo-album.page';
import { NuevoPhotoAlbumPage } from './nuevo-photo-album/nuevo-photo-album.page';

register();

@Component({
  selector: 'app-photos',
  templateUrl: './photos.page.html',
  styleUrls: ['./photos.page.scss'],
})
export class PhotosPage implements OnInit {

  datosUsuario: any;
  tipoUsu: string = '';
  codigoUsu: string = '';
  photoAlbums: any[] = [];
  photos: any[] = [];
  page: number = 0;

  constructor(private asmsSrvc: AsmsServiceService, private strg: Storage, private modalCtrl: ModalController) { }

  async ngOnInit() {
    this.datosUsuario = await this.strg.get('datos');
    this.tipoUsu = this.datosUsuario.tipo_usuario;
    this.codigoUsu = this.datosUsuario.tipo_codigo;
    (await this.asmsSrvc.getAlbumes(this.tipoUsu, this.codigoUsu, this.page)).subscribe((photoAlbums: any) => {
      this.photoAlbums = photoAlbums;
      console.log(photoAlbums);
    })
  }

  async add() {
    const nuevo = await this.modalCtrl.create({
      component: NuevoPhotoAlbumPage,
      componentProps: {
      }
    })
    await nuevo.present();
  }

  async verPhotoAlbum(pos: any){
    const codigo = this.photoAlbums[pos].codigo;
    const pagina = await this.modalCtrl.create({
      component: DetallePhotoAlbumPage,
      componentProps: {
        codigo
      }
    });
    await pagina.present();
  }

  async onIonInfinite(ev: any) {
    this.page = this.page + 1;
    (await this.asmsSrvc.getPhotoAlbumPadre(this.tipoUsu, this.codigoUsu, this.page)).subscribe((albums: any) => {
      if (Object.prototype.toString.call(albums) === '[object Array]') {
        this.photoAlbums.push(...albums);
      }
      (ev).target.complete();
    });
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
