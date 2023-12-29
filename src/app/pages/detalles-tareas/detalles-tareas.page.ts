import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';

@Component({
  selector: 'app-detalles-tareas',
  templateUrl: './detalles-tareas.page.html',
  styleUrls: ['./detalles-tareas.page.scss'],
})
export class DetallesTareasPage implements OnInit {

  detalles: any[] = [];
  @Input() titulo: string = '';
  @Input() materia: string = '';
  @Input() fecha: string = '';
  @Input() descripcion: string = '';
  @Input() codigo: string = '';
  @Input() alumno: string = '';
  @Input() situacion: number = 1;

  constructor( private modalCtrl: ModalController, private asmsSrvc: AsmsServiceService ) { }

  async ngOnInit() {
    /* (await this.asmsSrvc.getDetallesTareas(this.codigo, this.alumno, this.situacion)).subscribe((detalles: any) => {
      this.detalles = detalles;
      console.log(detalles);
    }) */
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
