import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-soporte',
  templateUrl: './soporte.page.html',
  styleUrls: ['./soporte.page.scss'],
})
export class SoportePage implements OnInit {

  datosUsuario: any[] = [];

  constructor( private strg: Storage) { }

  async ngOnInit() {
    this.datosUsuario = await this.strg.get('datos');
    console.log(this.datosUsuario);
  }

}
