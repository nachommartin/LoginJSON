import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogueoComponent } from './logueo/logueo.component';
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing';



@NgModule({
  declarations: [
    LogueoComponent,
    RegistroComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
