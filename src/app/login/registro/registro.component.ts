import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: []
})
export class RegistroComponent implements OnInit {

  email!: string;
  password!: string;
  confirmPassword!: string;


  constructor(private servicio:LoginService, private router: Router ) { }

  ngOnInit(): void {
  }
/* Del anterior ejercicio
  register() {
    const user = { email: this.email, password: this.password };
    this.servicio.register(user).subscribe(data => {
      this.servicio.setToken(data.token);
      this.router.navigateByUrl('/');
    },
    error => {
      console.log(error);
    });
  }
*/
}
