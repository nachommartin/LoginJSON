import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";



const appRoutes: Routes = [
  {    
    path: '',
    loadChildren: () => import('./login/login.module')
    .then(m => m.LoginModule)
  },
  {    
    path: 'protected',
    loadChildren: () => import('./users-servers/users-servers.module')
    .then(m => m.UsersServersModule)
  },
  { path: '**', redirectTo: ''}
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]})

export class AppRoutingModule { }