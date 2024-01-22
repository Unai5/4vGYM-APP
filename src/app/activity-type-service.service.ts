import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivityTypeServiceService {

  constructor() { 

  }
  activityTypes: IActivityType[] = [
    {name: 'Pilates', numberOfMonitors: 2},
    { name: 'BodyPump', numberOfMonitors: 1 },
    { name: 'Spinning', numberOfMonitors: 2 }
  ];
    
  getActivityTypes(): IActivityType[] {
    return this.activityTypes;
  }

  
}

export interface IActivityType {
  name: string;
  numberOfMonitors: number;
}

