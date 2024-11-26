import { Component} from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApicrudService } from '../services/apicrud.service';
import { Eventos } from 'src/interfaces/eventos';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page  {

  images = [
    '/assets/PythonMachineLearning.jpg',
    '/assets/CambioClimatico.jpg',
    '/assets/FormalizacionSII.png'
  ];


  eventos: Eventos[]=[];

  eventoid: any;
  

  constructor(private menucontroller: MenuController,
              private router: Router,
              private alertcontroller: AlertController,
              private apicrud:ApicrudService) {}

mostrarMenu(){
  this.menucontroller.open('first');
}



ngOnInit() {

}


ionViewWillEnter(){
  this.apicrud.getEventos().subscribe( data => {
    this.eventos = data; // Asegúrate de que 'data' contiene la propiedad 'imagen'
    console.log(this.eventos)
  })
}

CrearEvento(){
  this.router.navigate(['/creando']);
}


actualizarEvento(evento:any){
   console.log('Evento a modificar:', evento); // Verifica que esté recibiendo el evento correcto
    this.router.navigate(['/editando', evento.id],
    {queryParams: {evento:JSON.stringify(evento)}}
    )
  }

}
