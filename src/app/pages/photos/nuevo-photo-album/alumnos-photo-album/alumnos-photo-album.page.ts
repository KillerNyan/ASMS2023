import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';

@Component({
  selector: 'app-alumnos-photo-album',
  templateUrl: './alumnos-photo-album.page.html',
  styleUrls: ['./alumnos-photo-album.page.scss'],
})
export class AlumnosPhotoAlbumPage implements OnInit {

  secciones: any[] = [];
  alumnos: any[] = [];
  distintivo: any[] = [];
  textoBuscar: string = '';
  conteo: number = 0;
  grado: string = '';
  seccion: string = '';
  nivel: string = '';
  @Input() seleccionados: any[] = [];

  constructor( private modalCtrl: ModalController, private asmsSrvc: AsmsServiceService ) { }

  async ngOnInit() {
    (await this.asmsSrvc.getSecciones()).subscribe( (secciones: any) => {
      this.secciones = secciones;
      console.log(secciones);
    });
    (await this.asmsSrvc.getAlumnos(this.grado, this.nivel, this.seccion)).subscribe((alumnos: any) => {
      this.alumnos = alumnos;
      for (let i = 0; i < this.alumnos.length; i++){
        this.distintivo.push(false);
      }
      if (this.seleccionados.length != 0){
        for (let i = 0; i < this.alumnos.length; i++){
          let find = this.seleccionados.filter(cui => cui == this.alumnos[i].cui)
          if (find.length != 0){
            this.distintivo[i] = true;
          }
        }
      }
    });
  }

  buscar(event: any) {
    this.textoBuscar = event.detail.value;
  }

  seleccionarAlumno(event: any, pos: any){
    if (event.detail.checked == true){
      this.seleccionados.push(this.alumnos[pos].cui);
    } else {
      this.seleccionados = this.seleccionados.filter(cui => cui != this.alumnos[pos].cui);
    }
    this.conteo = this.seleccionados.length;
  }

  seleccionarTodos(){
    this.seleccionados = [];
    for (let i = 0; i < this.alumnos.length; i++){
      this.distintivo[i] = true;
      this.seleccionados.push(this.alumnos[i].cui);
    }
    this.conteo = this.seleccionados.length;
  }

  confirmar(){
    this.modalCtrl.dismiss({
      seleccionados: this.seleccionados,
      reemplazar: true
    })
  }

  cerrar(){
    this.modalCtrl.dismiss({
      seleccionados: [],
      reeemplazar: false
    });
  }

}
