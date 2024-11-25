import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditandoPage } from './editando.page';

const routes: Routes = [
  {
    path: '',
    component: EditandoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditandoPageRoutingModule {}
