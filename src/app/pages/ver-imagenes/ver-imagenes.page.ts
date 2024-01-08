import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-ver-imagenes',
  templateUrl: './ver-imagenes.page.html',
  styleUrls: ['./ver-imagenes.page.scss'],
})
export class VerImagenesPage implements OnInit {

  @Input() photos: any[] = [];
  @Input() photo: boolean = false;
  @Input() imagen: boolean = false;
  @Input() imagenP: boolean = false;
  //@Input() img: string = '';

  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log(this.photos);
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
