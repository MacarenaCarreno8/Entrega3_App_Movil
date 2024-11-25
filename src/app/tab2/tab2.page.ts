import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private alertcontroller: AlertController,
              private router: Router,
              private menucontroller: MenuController) {}


mostrarMenu(){
  this.menucontroller.open('first');
}


ngOnInit() {
}


async Registrado(){

  const alert = await this.alertcontroller.create({
    header: 'Login!',
    message: 'Bienvenido a mi App!',
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
