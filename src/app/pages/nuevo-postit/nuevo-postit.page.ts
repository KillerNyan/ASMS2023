import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';
import { AlumnosPostitPage } from '../alumnos-postit/alumnos-postit.page';

@Component({
  selector: 'app-nuevo-postit',
  templateUrl: './nuevo-postit.page.html',
  styleUrls: ['./nuevo-postit.page.scss'],
})
export class NuevoPostitPage implements OnInit {

  constructor(private modalCtrl: ModalController, private asmsSrvc: AsmsServiceService) { }

  alumnos: any[] = [];
  seleccionados: any [] = [];
  conteo: number = 0;
  @Input() grado: string = '';
  @Input() seccion: string = '';
  @Input() nivel: string = '';

  async ngOnInit() {
    /* (await this.asmsSrvc.getAlumnos(1, 1, 1)).subscribe((alumnos: any) => {
      this.alumnos = alumnos;
      console.log(alumnos);
    }) */
  }

  async selectAlumnos(){
    const grad = this.grado;
    const secc = this.seccion;
    const niv = this.nivel;
    const pagina = await this.modalCtrl.create({
      component: AlumnosPostitPage,
      componentProps: {
        grado: grad,
        seccion: secc,
        nivel: niv,
        seleccionados: this.seleccionados
      }
    })
    await pagina.present();

    const { data } = await pagina.onWillDismiss();
    if( data.reemplazar ){
      this.seleccionados = data.seleccionados;
    }
    this.conteo = this.seleccionados.length;
    console.log(data);
  }

  adjuntarArchivos(){

  }

  enviar(){

  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
