import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';
import { AlumnosPage } from '../alumnos/alumnos.page';

@Component({
  selector: 'app-grados',
  templateUrl: './grados.page.html',
  styleUrls: ['./grados.page.scss'],
})
export class GradosPage implements OnInit {

  secciones: any[] = [];

  constructor( private asmsSrvc: AsmsServiceService, private modalCtrl: ModalController ) { }

  async ngOnInit() {
    (await this.asmsSrvc.getSecciones()).subscribe( (secciones: any) => {
      this.secciones = secciones;
    })
  }

  async verAlumnos( pos: any ) {
    const graDesc = this.secciones[pos].grado_descripcion;
    const secDesc = this.secciones[pos].seccion_descripcion;
    const gra = this.secciones[pos].grado;
    const sec = this.secciones[pos].seccion;
    const niv = this.secciones[pos].nivel;
    const alumnos = await this.modalCtrl.create({
      component: AlumnosPage,
      componentProps: {
        gradoDesc: graDesc,
        seccionDesc: secDesc,
        grado: gra,
        seccion: sec,
        nivel: niv
      }
    })
    await alumnos.present();
  }

}
