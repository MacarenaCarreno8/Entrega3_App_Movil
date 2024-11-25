import { Component } from '@angular/core';

interface Menu{
  icon: string;
  name: string;
  redirectTo: string;
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
      redirectTo: '/tabs/tab1' 
    },

  ]

  constructor() {}
}
