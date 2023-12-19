import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-nuevo-postit',
  templateUrl: './nuevo-postit.page.html',
  styleUrls: ['./nuevo-postit.page.scss'],
})
export class NuevoPostitPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
