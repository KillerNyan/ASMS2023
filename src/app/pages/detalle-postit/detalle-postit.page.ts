import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-detalle-postit',
  templateUrl: './detalle-postit.page.html',
  styleUrls: ['./detalle-postit.page.scss'],
})
export class DetallePostitPage implements OnInit {

  @Input() titulo: string = '';
  @Input() descripcion: string = '';
  @Input() fecha: string = '';
  @Input() alumno: string = '';
  @Input() imagenes: any[] = [];
  @Input() archivos: any[] = [];

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
