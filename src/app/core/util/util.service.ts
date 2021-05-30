import { Injectable } from '@angular/core';
import { appRoutes as routes } from './app-routes';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  public get routes() {
    return routes;
  }

}
