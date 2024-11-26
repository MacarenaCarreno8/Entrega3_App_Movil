import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifuserPageRoutingModule } from './modifuser-routing.module';

import { ModifuserPage } from './modifuser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifuserPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ModifuserPage]
})
export class ModifuserPageModule {}
