import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-creando',
  templateUrl: './creando.page.html',
  styleUrls: ['./creando.page.scss'],
})
export class CreandoPage implements OnInit {

  constructor(private menucontroller: MenuController,
              private router: Router,
              private alertcontroller: AlertController) { }

  ngOnInit() {
  }



  mostrarMenu(){
    this.menucontroller.open('first');
  }


  async creado(){

    const alert = await this.alertcontroller.create({
      header: 'Creado!',
      message: 'Su evento se ha creado con éxito!',
      mode: 'ios',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
          this.router.navigate(['/tabs/tab3'])
          },
        },
      ],
    });

    await alert.present();
    
  }

  }

