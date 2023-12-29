import { Component, Input, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, ModalController } from '@ionic/angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';
import { DetallesAlumnoPage } from '../detalles-alumno/detalles-alumno.page';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
})
export class AlumnosPage implements OnInit {

  @Input() gradoDesc: string = '';
  @Input() seccionDesc: string = '';
  @Input() grado: string = '';
  @Input() seccion: string = '';
  @Input() nivel: string = '';

  constructor(private modalCtrl: ModalController, private asmsSrvc: AsmsServiceService) { }

  alumnos: any[] = [];

  async ngOnInit() {
    (await this.asmsSrvc.getAlumnos(this.grado, this.nivel, this.seccion)).subscribe((alumnos: any) => {
      if(alumnos != '') {
        this.alumnos = alumnos;
        console.log(alumnos);
      }
    })
  }

  async verDetalleAlumnos(pos: any){
    const pic = this.alumnos[pos].url_foto;
    const name = this.alumnos[pos].nombre;
    const num = this.alumnos[pos].cui;
    const sec = this.alumnos[pos].seccion;
    const pagina = await this.modalCtrl.create({
      component: DetallesAlumnoPage,
      componentProps: {
        foto: pic,
        nombre: name,
        cui: num,
        seccion: sec,
      }
    })
    await pagina.present();
  }

  /* InfiniteScroll(a: any){
    setTimeout(() => {
      a.target.complete();
    }, 1500);
  } */

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
