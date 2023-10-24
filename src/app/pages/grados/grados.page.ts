import { Component, OnInit } from '@angular/core';
import { AsmsServiceService } from 'src/app/services/asms-service.service';

@Component({
  selector: 'app-grados',
  templateUrl: './grados.page.html',
  styleUrls: ['./grados.page.scss'],
})
export class GradosPage implements OnInit {

  secciones: any[] = [];

  constructor( private asmsSrvc: AsmsServiceService ) { }

  async ngOnInit() {
    (await this.asmsSrvc.getSecciones()).subscribe( (secciones: any) => {
      this.secciones = secciones;
    })
  }

}
