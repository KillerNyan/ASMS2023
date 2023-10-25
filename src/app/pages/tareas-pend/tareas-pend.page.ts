import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';

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
  @Input() codigo: string = '';
  @Input() materiaDesc: string = '';

  constructor( private modalCtrl: ModalController, private asmsSrvc: AsmsServiceService ) { }
  
  tareas: any[] = [];

  async ngOnInit() {
    (await this.asmsSrvc.getTareas(this.nivel, this.grado, this.seccion, this.codigo)).subscribe(async (tareas: any) => {
      this.tareas = tareas;
    })
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
