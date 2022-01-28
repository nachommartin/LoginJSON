import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url: string = 'http://localhost:8000'; 


  constructor(private http:HttpClient) { }


login(email:string, password:string)  {
  const path = `${this.url}/auth/login`;
  const peticion = {
    'email': email,
    'password': password 
  }

  return this.http.post(path, peticion);
}

/* Del ejercicio anterior
register(user: any): Observable<any> {
  return this.http.post("https://reqres.in/api/register", user);
}

setToken(token: string) {
  this.cookies.set("token", token);
}

getToken() {
  return this.cookies.get("token");
}

getUser() {
  return this.http.get("https://reqres.in/api/users/2");
}
getUserLogged() {
  const token = this.getToken();
  // Aquí iría el endpoint para devolver el usuario para un token
}
*/
}