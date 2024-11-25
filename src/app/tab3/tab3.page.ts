import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApicrudService } from '../services/apicrud.service';
import { Eventos } from 'src/interfaces/eventos';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  eventos: Eventos[]=[];


  constructor(private menucontroller: MenuController,
              private router: Router,
              private alertcontroller: AlertController,
              private apicrud:ApicrudService) {}

mostrarMenu(){
  this.menucontroller.open('first');
}


ngOnInit() {

  this.apicrud.getEventos().subscribe( data => {
    this.eventos = data; // Asegúrate de que 'data' contiene la propiedad 'imagen'
  })

}


}
