import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private menucontroller: MenuController,
              private router: Router,
              private alertcontroller: AlertController) {}

mostrarMenu(){
  this.menucontroller.open('first');
}


ngOnInit() {
}


}
