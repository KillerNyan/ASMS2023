import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';
import { DetallesTareasPage } from '../detalles-tareas/detalles-tareas.page';

@Component({
  selector: 'app-tareas-pend',
  templateUrl: './tareas-pend.page.html',
  styleUrls: ['./tareas-pend.page.scss'],
})
export class TareasPendPage implements OnInit {

  @Input() gradoDesc: string = '';
  @Input() nivel: string = '';
  @Input() grado: string = '';
  @Input() seccionDesc: string = '';
  @Input() seccion: string = '';
  @Input() codigoMateria: string = '';
  @Input() materiaDesc: string = '';

  constructor( private modalCtrl: ModalController, private asmsSrvc: AsmsServiceService ) { }
  
  tareas: any[] = [];

  async ngOnInit() {
    (await this.asmsSrvc.getTareas(this.nivel, this.grado, this.seccion, this.codigoMateria)).subscribe(async (resp: any) => {
      if ( resp.status == 'true') {
        this.tareas = resp.data;
        console.log(this.tareas);
      } 
    })
  }

  async verDetalleTarea(pos: any) {
    const tit = this.tareas[pos].titulo;
    const mate = this.tareas[pos].materia;
    const fec = this.tareas[pos].fecha_entrega;
    const desc = this.tareas[pos].descripcion;
    const cod = this.tareas[pos].codigo;
    const pagina = await this.modalCtrl.create({
      component: DetallesTareasPage,
      componentProps: {
        titulo: tit,
        materia: mate,
        fecha: fec,
        descripcion: desc,
        codigo: cod
      }
    })
    await pagina.present();
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
