import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonitorsServiceService {

  monitors: IMonitor[] = [
    {id: 1, name: 'Juan', email: 'juanillo@gmail.com', telephone: '666666666'},
    {id: 2, name: 'Pedro', email: 'pedrete@gmail.com', telephone: '222222222'},
    {id: 3, name: 'Maria', email: 'maria@maria.com', telephone: '333333333'}
  ];


  public getMonitors() {
    return this.monitors;
  }

  constructor() { 

  }
}

export interface IMonitor {
  id: number;
  name: string;
  email: string;
  telephone: string;
}
