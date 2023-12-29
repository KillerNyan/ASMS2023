import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
})
export class NotificacionesPage implements OnInit {

  notificaciones: any[] = [];
  hijos: any[] = [];
  datosUsuario: any;
  codigo: any = '';
  tipoUsu: any = '';
  tipo: string = '';
  alumno: string = '';
  page: string = '';
  tipoNotificacion: string = '';

  constructor( private asmsSrvc: AsmsServiceService, private modalCtrl: ModalController, private strg: Storage) { }

  async ngOnInit() {
    this.datosUsuario = await this.strg.get('datos');
    this.codigo = this.datosUsuario.tipo_codigo;
    this.tipoUsu = this.datosUsuario.tipo_usuario;
    console.log(this.datosUsuario);
    (await this.asmsSrvc.getNotificaciones(this.codigo, this.tipo, this.alumno, this.page)).subscribe((notificaciones: any) => {
      this.notificaciones = notificaciones;
      console.log(notificaciones);
    });
    (await this.asmsSrvc.getHijos(this.tipoUsu, this.codigo)).subscribe((hijos: any) => {
      this.hijos = hijos;
    })
  }

  async verNotificaciones(pos: any){
    /* if (this.notificaciones[pos].type == '1'){
      tipo = 
    }
    const pagina = await this.modalCtrl.create({
      component:
    }) */
  }

}
