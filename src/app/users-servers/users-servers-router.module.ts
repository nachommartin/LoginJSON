import { NgModule } from '@angular/core';
import { MainComponent } from "./main/main.component";
import { InicioComponent } from "./inicio/inicio.component";
import { ServersComponent } from "./servers/servers.component";
import { UsersComponent } from "./users/users.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            { path: '', component: InicioComponent},
            { path: 'users', component: UsersComponent},
            { path: 'servers', component: ServersComponent},
            { path: '**', redirectTo: ''}
        ]
    }
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class UsersServersRoutingModule { } 

  