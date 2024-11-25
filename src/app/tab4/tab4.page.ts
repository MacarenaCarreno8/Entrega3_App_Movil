import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(private menucontroller: MenuController) { }


  mostrarMenu(){
    this.menucontroller.open('first');
  }
  


  ngOnInit() {
  }

}
