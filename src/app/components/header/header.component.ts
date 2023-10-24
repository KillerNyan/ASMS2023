import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  
  
  constructor( private router: Router, private storage: Storage, private userSrvc: UserService, private navCtrl: NavController, private menuCtrl: MenuController ) {}

  @Input() titulo: string = '';

  async ngOnInit() {
    
  }

  



}
