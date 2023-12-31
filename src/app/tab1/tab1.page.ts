import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  notificaciones: any[] = [
    { 
      url_logo: '../../../assets/img/notificacion.jpg',
      clase: 'clase1',
      created_at: '2023-09-06',
      message: 'Notificación 1',
      categoria: 'Categoria 1'
    },
    { 
      url_logo: '../../../assets/img/notificacion.jpg',
      clase: 'clase2',
      created_at: '2023-09-05',
      message: 'Notificación 2',
      categoria: 'Categoria 2'
    },
    { 
      url_logo: '../../../assets/img/notificacion.jpg',
      clase: 'clase3',
      created_at: '2023-09-04',
      message: 'Notificación 3',
      categoria: 'Categoria 3'
    },
    { 
      url_logo: '../../../assets/img/notificacion.jpg',
      clase: 'clase4',
      created_at: '2023-09-03',
      message: 'Notificación 4',
      categoria: 'Categoria 4'
    }
  ];
  

  constructor() {}

}
