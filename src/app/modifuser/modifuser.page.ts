import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-modifuser',
  templateUrl: './modifuser.page.html',
  styleUrls: ['./modifuser.page.scss'],
})
export class ModifuserPage implements OnInit {

  modifUserForm: FormGroup;

  user:any;

  userdata:any;

  email:any;

  userModificado={
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

  selectedImage: any;

  constructor(private alertcontroller: AlertController, private router: Router, private toastcontroller:ToastController, private builder:FormBuilder, 
    private authservice:AuthService, private activated:ActivatedRoute) { 
      this.activated.queryParams.subscribe(param => {
        this.user = JSON.parse(param['user']);
       })
      this.modifUserForm = this.builder.group({
        'nombre' : new FormControl("", [Validators.required, Validators.minLength(3)]),
        'apellido' : new FormControl("", [Validators.required, Validators.minLength(3)]),
        'fono' : new FormControl("", [Validators.required, Validators.pattern(/^\+569\d{8}$/)]),
        'email' : new FormControl("", [Validators.required, Validators.email]),
        'password' : new FormControl("", [Validators.required, Validators.minLength(8)]),
      })
    }

  ngOnInit() {
    console.log("Cargando")
    this.userModificado = this.user
  }

  async modifUser(){
    if(this.modifUserForm.value.password!==this.userModificado.password){
      this.showToast('Contraseña incorrecta');
    }else{
      this.userModificado.nombre=this.modifUserForm.value.nombre;
      this.userModificado.apellido=this.modifUserForm.value.apellido;
      this.userModificado.fono=this.modifUserForm.value.fono;
      this.userModificado.email=this.modifUserForm.value.email;
      this.authservice.putUser(this.userModificado).subscribe();
      this.showToast('Datos modificados exitosamente!');
    }
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

  onImageSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedImage = reader.result as string; // Guarda la imagen seleccionada
        this.userModificado.imageUrl = `assets/${file.name}`; // Actualiza la ruta de la imagen
      };
      reader.readAsDataURL(file); // Lee la imagen como URL
    }
  }

}
