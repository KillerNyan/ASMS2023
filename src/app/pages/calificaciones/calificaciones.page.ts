import { Component, OnInit } from '@angular/core';
import { AsmsServiceService } from 'src/app/services/asms-service.service';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.page.html',
  styleUrls: ['./calificaciones.page.scss'],
})
export class CalificacionesPage implements OnInit {

  secciones: any[] = [];

  constructor( private asmsSrvc: AsmsServiceService ) { }

  async ngOnInit() {
    (await this.asmsSrvc.getSecciones()).subscribe( (secciones: any) => {
      this.secciones = secciones;
    })
  }

}
