import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logueo',
  templateUrl: './logueo.component.html',
  styleUrls: []
})
export class LogueoComponent implements OnInit {

  email!: string;
  password!: string;


  constructor(private servicio: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.servicio.login(this.email,this.password).subscribe( data => {
      localStorage.setItem('jwt',JSON.stringify(data))
      this.router.navigateByUrl('/');
  });
}

}
