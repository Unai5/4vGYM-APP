import { Component } from '@angular/core';
import { IActivity } from '../activity-service.service';
import { ActivityService } from '../activity-service.service';
import { CasillaActividadComponent } from '../casilla-actividad/casilla-actividad.component';
import { DateDisplayComponent } from '../date-display/date-display.component';
import { CasillaVaciaComponent } from '../casilla-vacia/casilla-vacia.component';
import { CalendarComponent } from '../calendar/calendar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [CommonModule, FormsModule, CasillaActividadComponent, DateDisplayComponent, CasillaVaciaComponent, CalendarComponent],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.css'
})

export class ActivitiesComponent {

  constructor(private activityService: ActivityService) { 
    this.updateActivities();
  }

  actComponent: ActivitiesComponent = this;

  mostrarCasilla: boolean[] = [false, false, false]; 

  hour1: string = '10:00';
  hour2: string = '13:30';
  hour3: string = '17:30';

  selectedDate: Date = new Date();
  activities: IActivity[] = [];
  hourBlocks: { start: Date; end: Date }[] = [];

  newActivity: IActivity = { type: {name: '',numberOfMonitors: 0}, monitors: [], date: ''};
  activity1: IActivity = { type: {name: '',numberOfMonitors: 0}, monitors: [], date: ''};
  activity2: IActivity = { type: {name: '',numberOfMonitors: 0}, monitors: [], date: ''};
  activity3: IActivity = { type: {name: '',numberOfMonitors: 0}, monitors: [], date: ''};

  goBack(): void {
    this.selectedDate.setDate(this.selectedDate.getDate() - 1);
    this.ifDateIsChanged();
  }

  advance(): void {
    this.selectedDate.setDate(this.selectedDate.getDate() + 1);
    this.ifDateIsChanged();
  }

  updateActivities(): void {
    this.activities = this.activityService.getActivities();
  }

  ifDateIsChanged(): void {
    this.mostrarCasilla = [false, false, false];

    this.updateActivities();
    var date1 = this.setDate(this.hour1);
    var date2 = this.setDate(this.hour2);
    var date3 = this.setDate(this.hour3);

    this.activities.forEach((activity) => {
        if (activity.date == date1.toLocaleString()) {
            console.log(activity.date);
            this.activity1 = activity;
            this.mostrarCasilla[0] = true;
        } else if (activity.date == date2.toLocaleString()) {
            this.activity2 = activity;
            this.mostrarCasilla[1] = true;
        } else if (activity.date == date3.toLocaleString()) {
            this.activity3 = activity;
            this.mostrarCasilla[2] = true;
        }
    });
  }

  setDate(hour: string): Date {
    const [startHourHours, startHourMinutes] = hour.split(':');
    const newDate = new Date(this.selectedDate);
    newDate.setHours(Number(startHourHours), Number(startHourMinutes), 0);
    return newDate;
  }

}
