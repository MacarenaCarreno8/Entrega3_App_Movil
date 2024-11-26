import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Menu{
  icon: string;
  name: string;
  redirectTo: string;
  action?: () => void;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  menu: Menu []=[
    {
      icon: "home-outline",
      name: "Home",
      redirectTo: '/index' 
    },

    {
      icon: "person-outline",
      name: "Mi Perfil",
      redirectTo: '/perfil' 
    },

    {
      icon: "today-outline",
      name: "Eventos",
      redirectTo: '/tabs/tab3' 
    },

    {
      icon: "qr-code-outline",
      name: "Scannear",
      redirectTo: '/tabs/tab4' 
    },

    {
      icon: "log-out-outline",
      name: "Cerrar sesión",
      redirectTo: '',
      action: () => this.cerrarSesion() 
    },

  ]

  constructor(private router: Router) {}

  cerrarSesion() {
    sessionStorage.clear();
    this.router.navigate(['/tabs/tab1']);
  }
}
