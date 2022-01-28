import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Data } from '@angular/router';
import { Server } from '../interfaces/server';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: []
})
export class ServerComponent implements OnInit {

  server!: Server

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.data.subscribe(
      (data: Data) => {
        this.server = data['server'];
      }
    )
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }



}
