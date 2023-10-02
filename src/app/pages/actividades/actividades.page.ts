import { Component, OnInit } from '@angular/core';
import { AsmsServiceService } from 'src/app/services/asms-service.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.page.html',
  styleUrls: ['./actividades.page.scss'],
})
export class ActividadesPage implements OnInit {

  actividades: any;

  constructor(private asmsService: AsmsServiceService) { }

  async ngOnInit() {
    (await this.asmsService.getActividades()).subscribe((resp:any)=>{
      this.actividades = Object.values(resp).filter((item: any) => typeof item === 'object' && item.codigo);
    });
  }

}
