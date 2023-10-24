import { Component, OnInit } from '@angular/core';
import { AsmsServiceService } from 'src/app/services/asms-service.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.page.html',
  styleUrls: ['./tareas.page.scss'],
})
export class TareasPage implements OnInit {

  secciones: any[] = [];

  constructor( private asmsSrvc: AsmsServiceService ) { }

  async ngOnInit() {
    (await this.asmsSrvc.getSecciones()).subscribe((secciones: any) => {
      this.secciones = secciones;
    })
  }

}
