import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Users } from 'src/interfaces/users';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  comentario: string = '';

  registros: any[] = [];

  userdata: any;

  email: any;

  usuarioId:string='';

  user={
    id:0,
    run:"",
    password:"",
    nombre: "",
    apellido: "",
    fono: "",
    email:"",
    isactive:false,
    imageUrl:"",
    eventosRegistrados: []
  };

  constructor(private authservice:AuthService, private router:Router, private alertcontroller: AlertController, private menucontroller: MenuController) {
    this.usuarioId = sessionStorage.getItem('run') || '';
   }

  ngOnInit() {
  }

  ionViewWillEnter(){
    console.log("Cargando datos")
    console.log(this.usuarioId)
    this.cargarDatos();
  }

  mostrarMenu(){
    this.menucontroller.open('first');
  }

  cargarDatos(){
    this.authservice.getUserByEmailFromSession().subscribe(data => {
      this.userdata = data;
      console.log(this.userdata);
      this.user={
        id: this.userdata[0].id,
        run: this.userdata[0].run,
        password: this.userdata[0].password,
        nombre: this.userdata[0].nombre,
        apellido: this.userdata[0].apellido,
        fono: this.userdata[0].fono,
        email: this.userdata[0].email,
        isactive: this.userdata[0].isactive,
        imageUrl: this.userdata[0].imageUrl,
        eventosRegistrados: []
      }
    })
    this.email = sessionStorage.getItem('email');
  }

  modifUser(Observable:Users){
    this.router.navigate(['/modifuser', this.user.id], 
      {queryParams: {user: JSON.stringify(Observable)}}
    )
  }

}
