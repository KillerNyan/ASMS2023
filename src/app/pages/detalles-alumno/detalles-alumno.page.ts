import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalles-alumno',
  templateUrl: './detalles-alumno.page.html',
  styleUrls: ['./detalles-alumno.page.scss'],
})
export class DetallesAlumnoPage implements OnInit {

  @Input() foto: string = '';
  @Input() nombre: string = '';
  @Input() cui: string = '';
  @Input() seccion: string = '';

  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
