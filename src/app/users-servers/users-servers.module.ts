import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InicioComponent } from './inicio/inicio.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UsersComponent,
    ServersComponent,
    PageNotFoundComponent,
    InicioComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class UsersServersModule { }
