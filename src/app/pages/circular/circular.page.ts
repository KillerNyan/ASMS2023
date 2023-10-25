import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-circular',
  templateUrl: './circular.page.html',
  styleUrls: ['./circular.page.scss'],
})
export class CircularPage implements OnInit {

  @Input() titulo: string = '';

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
