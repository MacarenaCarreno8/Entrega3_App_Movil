import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreandoPage } from './creando.page';

const routes: Routes = [
  {
    path: '',
    component: CreandoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreandoPageRoutingModule {}
