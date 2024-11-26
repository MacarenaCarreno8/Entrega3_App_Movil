import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ApicrudService } from '../services/apicrud.service';


@Component({
  selector: 'app-editando',
  templateUrl: './editando.page.html',
  styleUrls: ['./editando.page.scss'],
})
export class EditandoPage implements OnInit {

eventito = {
  titulo: '',
  descripcion: '',
  fecha: '',
  imagen: '',
  lugar: '',
  comentario: []
}


eventoid: any;

imagenPreview: string | undefined; // Definir imagenPreview


  constructor(private alertcontroller: AlertController,
              private router: Router,
              private activated: ActivatedRoute,
              private apicrud: ApicrudService) { }

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


  mostrarMenu() {
    console.log("Mostrar menú");
  }


  onSelectImage(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagenPreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }  


  updateEvento() {
    this.apicrud.putEventos(this.eventoid).subscribe();
    this.router.navigateByUrl("/tabs/tab3");
  }

}
