import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class RegresarGuard{
  
  constructor(private authservice:AuthService, private toastcontroller:ToastController, private router:Router){}

  canActivate():Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
    if(this.authservice.IsLoggedIn()){ /* email==null */
      this.showToast('Debe cerrar sesión!');
      this.router.navigate(['/index']);
      return false;
    }else{
      return true;
    }
    
  }

  async showToast(msg: any){
    const toast = await this.toastcontroller.create({
      position: 'bottom',
      message:msg,
      duration:2500
    })
    toast.present();
  }

};
