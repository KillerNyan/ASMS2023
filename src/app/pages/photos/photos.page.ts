import { Component, OnInit } from '@angular/core';
import { AsmsServiceService } from 'src/app/services/asms-service.service';

import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-photos',
  templateUrl: './photos.page.html',
  styleUrls: ['./photos.page.scss'],
})
export class PhotosPage implements OnInit {

  albumes: any[] = [];
  photos: any[] = [];
  alumnos: any[] = [];
  
  constructor( private asmsSrvc: AsmsServiceService ) { }
  
  async ngOnInit() {
    (await this.asmsSrvc.getAlbumes()).subscribe( (albumes: any) => {
      this.albumes = albumes;
      console.log(albumes);
    })
  }
  
  mostrarFotos(pos: any){
    this.photos = this.albumes[pos].imagenes;
    console.log(this.photos)
  }


}
