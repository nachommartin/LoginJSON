import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Server } from '../interfaces/server';
import { ServersService } from '../servers.service';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {

  server!: Server;
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;


  constructor(private servicio: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.server = this.servicio.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    
    
    this.route.queryParams.subscribe(
      (queryParams: Params) => {
      this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
    }
    )

  }

  onUpdateServer() {
    this.servicio.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) {
      return true;
    }
    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved) {
      return confirm('Do you want to exit without saving your changes?');
    } else {
      return true;
    }
  }

}
