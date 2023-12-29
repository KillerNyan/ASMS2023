import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';
import { TareasPendPage } from '../tareas-pend/tareas-pend.page';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.page.html',
  styleUrls: ['./materias.page.scss'],
})
export class MateriasPage implements OnInit {

  @Input() gradoDesc: string = '';
  @Input() nivel: string = '';
  @Input() grado: string = '';
  @Input() seccionDesc: string = '';
  @Input() seccion: string = '';

  constructor( private modalCtrl: ModalController, private asmsSrvc: AsmsServiceService ) { }

  materias: any[] = [];

  async ngOnInit() {
    (await this.asmsSrvc.getMaterias(this.nivel, this.grado)).subscribe((materias: any) => {
      this.materias = materias;
    })
  }

  async verTareas(pos: any) {
    const gradDesc = this.gradoDesc;
    const secDesc = this.seccionDesc;
    const niv = this.nivel;
    const grad = this.grado;
    const sec = this.seccion;
    const codMat = this.materias[pos].codigo;
    const matDesc = this.materias[pos].descripcion;
    const circular = await this.modalCtrl.create({
      component: TareasPendPage,
      componentProps: {
        gradoDesc: gradDesc,
        nivel: niv,
        grado: grad,
        seccionDesc: secDesc,
        seccion: sec,
        codigoMateria: codMat,
        materiaDesc: matDesc
      }
    })
    await circular.present();
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
