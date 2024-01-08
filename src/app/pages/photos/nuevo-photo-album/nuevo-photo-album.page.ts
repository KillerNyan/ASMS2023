import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';

import { FilePicker } from '@robingenz/capacitor-file-picker';
import { AlumnosPhotoAlbumPage } from './alumnos-photo-album/alumnos-photo-album.page';

@Component({
  selector: 'app-nuevo-photo-album',
  templateUrl: './nuevo-photo-album.page.html',
  styleUrls: ['./nuevo-photo-album.page.scss'],
})
export class NuevoPhotoAlbumPage implements OnInit {

  constructor(private modalCtrl: ModalController, private asmsSrvc: AsmsServiceService) { }

  alumnos: any[] = [];
  seleccionados: any [] = [];
  conteo: number = 0;

  ngOnInit() {
  }

  async selectAlumnos(){
    const pagina = await this.modalCtrl.create({
      component: AlumnosPhotoAlbumPage,
      componentProps: {
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
