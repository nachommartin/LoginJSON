import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogueoComponent } from './logueo/logueo.component';
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: '', component: LogueoComponent},
            { path: 'register', component: RegistroComponent},
            { path: '**', redirectTo: 'login'}
        ]
    }
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class LoginRoutingModule { }
