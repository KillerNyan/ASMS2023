import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  constructor() {}

  circulares: any[] = [
    { 
      url_logo: '../../../assets/img/circular.png',
      created_at: '2023-09-06',
      message: 'Calendario mes de septiembre',
      categoria: '(Ver documento adjunto)'
    },
    { 
      url_logo: '../../../assets/img/circular.png',
      clase: 'clase2',
      created_at: '2023-09-05',
      message: 'Notificación 2',
      categoria: 'Categoria 2'
    },
    { 
      url_logo: '../../../assets/img/circular.png',
      clase: 'clase3',
      created_at: '2023-09-04',
      message: 'Notificación 3',
      categoria: 'Categoria 3'
    },
    { 
      url_logo: '../../../assets/img/circular.png',
      clase: 'clase4',
      created_at: '2023-09-03',
      message: 'Notificación 4',
      categoria: 'Categoria 4'
    }
  ];

}
