import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  userdata:any;

  usuario={
    id:0,
    run:"",
    password:"",
    nombre: "",
    apellido: "",
    fono: "",
    email:"",
    isactive:false,
    imageUrl:""
  }

  loginForm:FormGroup;

  constructor(private alertcontroller: AlertController, private router: Router, private toastcontroller:ToastController, private authservice:AuthService,
              private builder:FormBuilder, private menucontroller:MenuController){
                this.loginForm = this.builder.group({
                  'correo' : new FormControl("", [Validators.required, Validators.email]),
                  'password' : new FormControl("", [Validators.required, Validators.minLength(8)])
                })
  }

  mostrarMenu(){
    this.menucontroller.open('first');
  }


  ngOnInit() {
  }


  login(){
    if (!this.loginForm.valid){
      this.showToast('Debe ingresar sus datos para acceder');
      return;
    }
    const email = this.loginForm.value.correo;
    const password = this.loginForm.value.password;

    this.authservice.getUserByEmail(email).subscribe(resp => {
      this.userdata = resp;
      console.log(this.userdata);
      if(this.userdata.length === 0){
        this.loginForm.reset();
        /* Usuario no existe */
        this.Mensaje('Usuario ingresado no existe', 'Debe registrarse para acceder');
        return;
      }
      this.usuario={
        id: this.userdata[0].id,
        run: this.userdata[0].run,
        password: this.userdata[0].password,
        nombre: this.userdata[0].nombre,
        apellido: this.userdata[0].apellido,
        fono: this.userdata[0].fono,
        email: this.userdata[0].email,
        isactive: this.userdata[0].isactive,
        imageUrl: this.userdata[0].imageUrl
      }
      if(this.usuario.password !== password){
        /* Contraseña incorrecta */
        this.Mensaje('Contraseña incorrecta', 'Revise sus credenciales');
        return;
      }
      if(!this.usuario.isactive){
        this.loginForm.reset();
        /* Usuario no activo */
        this.Mensaje('Usuario inactivo', 'Contactar al correo admin@admin.cl');
        return;
      }
      this.loginForm.reset();
      this.iniciarSesion(this.usuario);
    })
  }

  private iniciarSesion(usuario:any){
    sessionStorage.setItem('email', usuario.email);
    sessionStorage.setItem('password', usuario.password);
    sessionStorage.setItem('ingresado', 'true');
    sessionStorage.setItem('nombreUsuario', usuario.nombre); // Almacenar el nombre del usuario
    sessionStorage.setItem('run', usuario.run); // Almacenar el RUN del usuario
    this.showToast('Bienvenid@ ' + this.usuario.nombre);
    this.router.navigate(['/index'])
  }

  async showToast(msg: any){
    const toast = await this.toastcontroller.create({
      position: 'bottom',
      message:msg,
      duration:2500,
      cssClass: 'custom-toast'
    })
    toast.present();
  }

  async Mensaje(hd:any, msg:any){
    const alerta = await this.alertcontroller.create({
      mode: 'ios',
      header : hd,
      message : msg,
      buttons : ['OK']
    })
    alerta.present();
  }


}
