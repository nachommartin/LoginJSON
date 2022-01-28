import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: []
})
export class ServersComponent implements OnInit {

  public servers: {id: number, name: string, status: string}[] = [];


  constructor(private router: Router, private servicio:ServersService ) { }

  ngOnInit(): void {
    this.servers = this.servicio.getServers();

  }

  onReload() {
    this.router.navigate(['/servers'] )

  }

}
