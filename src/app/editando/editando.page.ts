import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editando',
  templateUrl: './editando.page.html',
  styleUrls: ['./editando.page.scss'],
})
export class EditandoPage implements OnInit {

  constructor(private alertcontroller: AlertController,
              private router: Router) { }

  ngOnInit() {
  }

  async editar(){

    const alert = await this.alertcontroller.create({
      header: 'Evento editado con éxito!',
      message: 'Continúe navegando.',
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
