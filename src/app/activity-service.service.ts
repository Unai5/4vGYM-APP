import { Injectable } from '@angular/core';
import { IMonitor } from './monitors-service.service';
import { IActivityType } from './activity-type-service.service';


@Injectable({
  providedIn: 'root'
})
export class ActivityService {
 activities: IActivity[] = [
    {
      type: {
        name: 'BodyPump',
        numberOfMonitors: 1
      },
      monitors: [
        {
          id: 2,
          name: 'Marta',
          email: 'marta@gmail.com',
           telephone: '222222222'
          }
        ],
        date: "11/1/2024, 13:30:00",
    },
    {
      type: {
        name: 'Pilates',
        numberOfMonitors: 2
      },
      monitors: [
        {
          id: 1,
          name: 'Juan',
          email: 'juanillo@gmail.com', 
          telephone: '666666666'
        },
        {
          id: 2,
          name: 'Pedro',
          email: 'pedrete@gmail.com',
           telephone: '222222222'
          }
        ],
        date: "11/1/2024, 10:00:00",
    },
    {
      type: {
        name: 'Spinning',
        numberOfMonitors: 2
      },
      monitors: [
        {
          id: 1,
          name: 'Anne',
          email: 'annegorria@gmail.com', 
          telephone: '666666666'
        },
        {
          id: 2,
          name: 'Susana',
          email: 'morenitos@gmail.com',
           telephone: '222222222'
          }
        ],
        date: "12/1/2024, 10:00:00",
    },
    {
      type: {
        name: 'Pilates',
        numberOfMonitors: 2
      },
      monitors: [
        {
          id: 1,
          name: 'Juan',
          email: 'juanillo@gmail.com', 
          telephone: '666666666'
        },
        {
          id: 2,
          name: 'Pedro',
          email: 'pedrete@gmail.com',
           telephone: '222222222'
          }
        ],
      date: "12/1/2024, 17:30:00",
    }];

  public getActivities(): IActivity[] {
    return this.activities;
  }

  constructor() {}
}

export interface IActivity {
  type: IActivityType;
  monitors: IMonitor[];
  date: string;
}

