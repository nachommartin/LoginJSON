import { Injectable } from '@angular/core';
import { ServersService } from '../servers.service';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export interface Server {
  id: number;
  name: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServerResolverService {

  constructor(private servicio: ServersService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
    return this.servicio.getServer(+route.params['id']);
  }
}
