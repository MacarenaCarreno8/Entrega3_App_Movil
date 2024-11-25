import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreandoPageRoutingModule } from './creando-routing.module';

import { CreandoPage } from './creando.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreandoPageRoutingModule
  ],
  declarations: [CreandoPage]
})
export class CreandoPageModule {}
