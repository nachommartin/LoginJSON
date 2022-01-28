import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: []
})
export class InicioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  onLoadServer(numServer: number) {
    this.router.navigate(['/servers', numServer, 'edit'], { queryParams: { allowEdit: '8' }, fragment: 'loading' });
  }

}
