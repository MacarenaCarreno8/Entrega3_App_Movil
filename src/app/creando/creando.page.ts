import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApicrudService } from '../services/apicrud.service';
import { Eventos, EventosCrear } from 'src/interfaces/eventos';


@Component({
  selector: 'app-creando',
  templateUrl: './creando.page.html',
  styleUrls: ['./creando.page.scss'],
})
export class CreandoPage implements OnInit {

 // Nuevo evento que será llenado por el formulario
 nuevoEvento : EventosCrear ={

  titulo: '',
  descripcion: '',
  fecha: '',
  imagen: '',
  lugar: '',
  comentario: []
}

imagenPreview: string | ArrayBuffer | null = null; // Para la previsualización


  constructor(private menucontroller: MenuController,
              private router: Router,
              private alertcontroller: AlertController,
              private apicrudService: ApicrudService) { }

  ngOnInit() {
  }



  mostrarMenu(){
    this.menucontroller.open('first');
  }


  

  // Manejar la selección de la imagen
  onSelectImage(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const files = inputElement.files;
    
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      
      reader.onload = () => {
        this.imagenPreview = reader.result;
        this.nuevoEvento.imagen = reader.result as string;
      };
      
      reader.readAsDataURL(file);
    } else {
      console.error('No se seleccionó ningún archivo.');
    }
  }

 // Guardar el nuevo evento
 async crearEvento() {
  try {
    await this.apicrudService.postEventos(this.nuevoEvento).toPromise(); // Envía el evento al servicio
    this.mostrarAlerta(); // Llama a la función para mostrar el mensaje de éxito
  } catch (error) {
    console.error('Error al crear el evento', error);
  }
}

// Mostrar alerta de éxito
async mostrarAlerta() {
  const alert = await this.alertcontroller.create({
    header: '¡Creado!',
    message: 'Su evento se ha creado con éxito.',
    buttons: [
      {
        text: 'OK',
        handler: () => {
          this.router.navigate(['/tabs/tab3']); // Redirige a la página de eventos
        }
      }
    ]
  });
  await alert.present();
}



  }

