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
      dateStart: new Date('2024-01-11T13:30:00'),
      dateEnd: new Date('2024-01-11T15:00:00')
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
      dateStart: new Date('2024-01-11T10:00:00'),
      dateEnd: new Date('2024-01-11T11:30:00')
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
      dateStart: new Date('2024-01-12T10:00:00'),
      dateEnd: new Date('2024-01-12T11:30:00')
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
      dateStart: new Date('2024-01-12T17:30:00'),
      dateEnd: new Date('2024-01-12T19:00:00')
    }];

  public getActivities(): IActivity[] {
    return this.activities;
  }
  constructor() {}
}

export interface IActivity {
  type: IActivityType;
  monitors: IMonitor[];
  dateStart: Date;
  dateEnd: Date;
}

