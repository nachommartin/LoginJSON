import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { CanDeactivateGuardService } from './users-servers/servers/edit-server/can-deactivate-guard.service';
import { GuardianService } from './guardian.service';
import { ServersService } from './users-servers/servers/servers.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [CanDeactivateGuardService, GuardianService, ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
