import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifuserPage } from './modifuser.page';

const routes: Routes = [
  {
    path: '',
    component: ModifuserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifuserPageRoutingModule {}
