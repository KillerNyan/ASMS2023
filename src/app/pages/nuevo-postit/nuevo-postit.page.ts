import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';
import { AlumnosPostitPage } from '../alumnos-postit/alumnos-postit.page';

import { FilePicker } from '@robingenz/capacitor-file-picker';

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

  //codDoc: any, subpos: any, group: number, pos: number
  async pickFile(  ){
    await FilePicker.pickFiles({
      types: ['application/pdf', 'images/jpg', 'images/jpeg', 'images/png'],
      multiple: true,
      //readData: true,
    }).then(async (file) => {
      //console.log(file);
      const fileBase64 = file.files[0].data;
      const mimeType = 'data:' + file.files[0].mimeType + ';base64;';
      const docName = file.files[0].name;
      //const docFile = this.dataURLtoFile(mimeType+fileBase64, docName);
    }).catch( err => {
      console.log( err );
      console.log('El usuario cancelo la accion de seleccionar un archivo.');
    });
  }

  dataURLtoFile(dataurl: any, filename: any) {
    let arr = dataurl.split(',');
    let mime = arr[0].match(/:(.*?);/)[1];
    let bstr = atob(arr[1]);
    let n = bstr.length;
    let u8arr = new Uint8Array(n);
    while (n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type: mime});
  }

  enviar(){

  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
