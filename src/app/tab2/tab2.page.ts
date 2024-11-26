import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UserNuevo } from 'src/interfaces/users';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  registroForm:FormGroup;

  newUser: UserNuevo={
    run:"",
    password:"",
    nombre: "",
    apellido: "",
    fono: "",
    email:"",
    isactive:false,
    imageUrl:""
  }

  userdata:any;

  constructor(private alertcontroller: AlertController,
              private router: Router,
              private menucontroller: MenuController, private toastcontroller:ToastController, private authservice:AuthService,
              private builder:FormBuilder) {
                this.registroForm = this.builder.group({
                  'nombre' : new FormControl("", [Validators.required, Validators.minLength(3)]),
                  'apellido' : new FormControl("", [Validators.required, Validators.minLength(3)]),
                  'run' : new FormControl("", [Validators.required, Validators.pattern(/^\d{8}-[\dkK]$/)]),
                  'fono' : new FormControl("", [Validators.required, Validators.pattern(/^\+569\d{8}$/)]),
                  'correo' : new FormControl("", [Validators.required, Validators.email]),
                  'password' : new FormControl("", [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]),
                })
              }


mostrarMenu(){
  this.menucontroller.open('first');
}


ngOnInit() {
}

registro(){
  if(this.registroForm.valid){
    this.authservice.getUserByEmail(this.registroForm.value.correo).subscribe(resp => {
      this.userdata = resp;
      if(this.userdata.length>0){
        /* Duplicidad email*/
        this.mensaje('Error', 'Existe una cuenta registrada con el email: ' + this.registroForm.value.correo + '. Registrese con otro email');
      }else{
        this.authservice.getUserByRun(this.registroForm.value.run).subscribe(resp => {
          this.userdata = resp;
          if(this.userdata.length>0){
            /* Duplicidad rut */
            this.mensaje('Error', 'Existe una cuenta registrada con el rut: ' + this.registroForm.value.run + '. Registrese con otro rut');
          }else{
            this.newUser.nombre = this.registroForm.value.nombre;
            this.newUser.apellido = this.registroForm.value.apellido;
            this.newUser.email = this.registroForm.value.correo;
            this.newUser.run = this.registroForm.value.run;
            this.newUser.fono = this.registroForm.value.fono;
            this.newUser.password = this.registroForm.value.password;
            this.newUser.isactive = true;
            this.newUser.imageUrl = "assets/User.jpg";
            this.authservice.postUser(this.newUser).subscribe();
            this.registroForm.reset();
            /* Usuario creado */
            this.mensaje('Usuario creado','Bienvenid@! ' + this.newUser.nombre);
            this.router.navigateByUrl('/tabs/tab1');
          }
        })
      }
    })
  }else{
    this.showToast('Debe ingresar sus datos para registrarse');
    return;
  }
}

async mensaje(hd:any, msg:any){
  const alerta = await this.alertcontroller.create({
    mode: 'ios',
    header : hd,
    message : msg,
    buttons : ['OK']
  })
  alerta.present();
}

async showToast(msg: any){
  const toast = await this.toastcontroller.create({
    position: 'bottom',
    positionAnchor: 'footer',
    message:msg,
    duration:2500,
    cssClass: 'custom-toast'
  })
  toast.present();
}

}
