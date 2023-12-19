import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.page.html',
  styleUrls: ['./tab.page.scss'],
})
export class TabPage implements OnInit {

  componentes: any[] = [];
  
  constructor(private storage: Storage, private userSrvc: UserService, private navCtrl: NavController) {}

  @Input() titulo: string = '';

  async ngOnInit() {
    (await this.userSrvc.getMenuOpts()).subscribe( (componentes: any) => {
      this.componentes = componentes;
    })
  }

  async logOut(){
    this.navCtrl.navigateRoot('/login');
    this.storage.remove('datos');
    this.storage.remove('ordenes');
    this.storage.clear();
  }

  navegar(ruta: any) {
    this.navCtrl.navigateRoot(ruta);
  }

}
