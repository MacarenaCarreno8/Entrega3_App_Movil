import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditandoPageRoutingModule } from './editando-routing.module';

import { EditandoPage } from './editando.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditandoPageRoutingModule
  ],
  declarations: [EditandoPage]
})
export class EditandoPageModule {}
