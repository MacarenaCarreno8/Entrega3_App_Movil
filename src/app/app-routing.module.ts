import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutorizadoGuard } from './guards/autorizado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  },

  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule),
    canActivate:[AutorizadoGuard]
  },
  {
    path: 'restablecer',
    loadChildren: () => import('./restablecer/restablecer.module').then( m => m.RestablecerPageModule),
    canActivate:[AutorizadoGuard]
  },
  {
    path: 'creando',
    loadChildren: () => import('./creando/creando.module').then( m => m.CreandoPageModule),
    canActivate:[AutorizadoGuard]
  },
  {
    path: 'editando',
    loadChildren: () => import('./editando/editando.module').then( m => m.EditandoPageModule),
    canActivate:[AutorizadoGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'modifuser/:id',
    loadChildren: () => import('./modifuser/modifuser.module').then( m => m.ModifuserPageModule)
  },

  
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
