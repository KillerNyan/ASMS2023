import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-soporte',
  templateUrl: './soporte.page.html',
  styleUrls: ['./soporte.page.scss'],
})
export class SoportePage implements OnInit {

  @Input() nombre: string = '';
  @Input() logo: string = '';

  constructor( private modalCtrl: ModalController ) { }

  async ngOnInit() {
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
