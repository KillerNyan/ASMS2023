import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-grados',
  templateUrl: './grados.page.html',
  styleUrls: ['./grados.page.scss'],
})
export class GradosPage implements OnInit {

  secciones: any[] = [];
  componentes: any[] = [];

  constructor( private asmsSrvc: AsmsServiceService, private navCtrl: NavController, private userSrvc: UserService, private storage: Storage ) { }

  async ngOnInit() {
    (await this.asmsSrvc.getSecciones()).subscribe( (secciones: any) => {
      this.secciones = secciones;
    });
    (await this.userSrvc.getMenuOpts()).subscribe( (componentes: any) => {
      this.componentes = componentes;
    })
  }

  onClick() {
    this.navCtrl.navigateRoot('/circulares');
  }

  navegar(ruta: any) {
    this.navCtrl.navigateRoot(ruta);
  }

  async logOut(){
    this.navCtrl.navigateRoot('/login');
    this.storage.remove('datos');
    this.storage.remove('ordenes');
    this.storage.clear();
  }

}
