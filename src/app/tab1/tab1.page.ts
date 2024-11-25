import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private menucontroller: MenuController,
              private alertcontroller: AlertController,
              private router: Router){}

  mostrarMenu(){
    this.menucontroller.open('first');
  }


  ngOnInit() {
  }


  async login(){

    const alert = await this.alertcontroller.create({
      header: 'Sesión iniciada con éxito!',
      message: 'Bienvenido a los eventos de Duoc Uc!',
      mode: 'ios',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
          this.router.navigate(['/index'])
          },
        },
      ],
    });

    await alert.present();
    
  }


}
