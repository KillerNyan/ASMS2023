import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AsmsServiceService } from 'src/app/services/asms-service.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.page.html',
  styleUrls: ['./tab.page.scss'],
})
export class TabPage implements OnInit {

  imagenes: any;
  logo: string = '';
  
  constructor(private storage: Storage, private asmsSrvc: AsmsServiceService, private navCtrl: NavController) {}

  @Input() titulo: string = '';
  mostrarHome: boolean = true

  async ngOnInit() {
    (await this.asmsSrvc.getImagenes()).subscribe((imagenes: any) => {
      this.imagenes = imagenes;
      this.logo = imagenes.data.logo;
    })
  }

  async logOut(){
    this.navCtrl.navigateRoot('/login');
    this.storage.remove('datos');
    this.storage.remove('ordenes');
    this.storage.clear();
  }

  ocultarHome() {
    this.mostrarHome = false
  }

  navegar(ruta: any) {
    this.navCtrl.navigateRoot(ruta);
  }

  verEncuestas(){
    
  }

  verPagos(){

  }

  verVideoClases(){

  }

  verActividades(){

  }

  verNotas(){

  }

  verReportes(){

  }
  
  verSoporte(){

  }

}
