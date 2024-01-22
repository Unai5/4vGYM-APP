import { Injectable } from '@angular/core';
import { IMonitor } from './monitors-service.service';
import { IActivityType } from './activity-type-service.service';


@Injectable({
  providedIn: 'root'
})
export class ActivityService {
 activities: IActivity[] = [
    {
      id: 1,
      type: {
        name: 'BodyPump',
        numberOfMonitors: 1
      },
      monitors: [
        {
          id: 1,
          name: 'Juan',
          email: 'juanillo@gmail.com',
           telephone: '666666666'
          }
        ],
        date: "11/1/2024, 13:30:00",
    },
    {
      id: 2,
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
      id: 3,
      type: {
        name: 'Spinning',
        numberOfMonitors: 2
      },
      monitors: [
        {
          id: 1,
          name: 'Maria',
          email: 'maria@maria.com', 
          telephone: '333333333'
        },
        {
          id: 2,
          name: 'Pedro',
          email: 'pedrete@gmail.com',
           telephone: '222222222'
          }
        ],
        date: "12/1/2024, 10:00:00",
    },
    {
      id: 4,
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
  removeActivity(id: number) {
    this.activities = this.activities.filter(activity => activity.id !== id);
  }
  constructor() {}

  public addActivity(activity: IActivity) {
    this.activities.push(activity);
  }

  public modifyActivity(activity: IActivity) {
    this.activities.forEach((activityFor) => {
      if (activityFor.id == activity.id) {
        activityFor = activity;
      }
    });
  }

}

export interface IActivity {
  type: IActivityType;
  monitors: IMonitor[];
  date: string;
  id?: number;
}


