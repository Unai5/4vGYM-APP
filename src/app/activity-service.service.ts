import { Injectable } from '@angular/core';
import { IMonitor } from './monitors-service.service';
import { IActivityType } from './activity-type-service.service';


@Injectable({
  providedIn: 'root'
})
export class ActivityServiceService {
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
      dateStart: new Date('2019-01-01T08:00:00'),
      dateEnd: new Date('2019-01-01T09:00:00')
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
      dateStart: new Date('2019-01-01T09:00:00'),
      dateEnd: new Date('2019-01-01T10:00:00')
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
      dateStart: new Date('2019-01-01T11:00:00'),
      dateEnd: new Date('2019-01-01T12:00:00')
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
      dateStart: new Date('2019-01-01T12:00:00'),
      dateEnd: new Date('2019-01-01T13:00:00')
    }];

  
  constructor() {}
}

export interface IActivity {
  type: IActivityType;
  monitors: IMonitor[];
  dateStart: Date;
  dateEnd: Date;
}

