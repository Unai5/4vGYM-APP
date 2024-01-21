import { Component } from '@angular/core';
import { IActivity } from '../activity-service.service';
import { ActivityService } from '../activity-service.service';
import { CasillaActividadComponent } from '../casilla-actividad/casilla-actividad.component';
import { DateDisplayComponent } from '../date-display/date-display.component';
import { CasillaVaciaComponent } from '../casilla-vacia/casilla-vacia.component';
import { CalendarComponent } from '../calendar/calendar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { TabsComponent } from '../tabs/tabs.component';
@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [CommonModule, FormsModule, CasillaActividadComponent, DateDisplayComponent, CasillaVaciaComponent, CalendarComponent],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.css'
})

export class ActivitiesComponent {

  getFecha(): string {
    fechaprueba = new Date(2024, 0, 21, 13, 30, 0, 0);
    return fechaprueba.toLocaleDateString(); 
  }

  constructor(private activityService: ActivityService) { 
    this.generateHourBlocks();  
    this.updateActivities();
  }
  mostrarCasilla: boolean[] = [false, false, false]; 
  cambiarVisibilidad(index: number): void {
    this.mostrarCasilla[index] = !this.mostrarCasilla[index];
  }

  hour1: string = '10:00';
  hour2: string = '13:30';
  hour3: string = '17:30';
  
  cont1: boolean = false;
  cont2: boolean = false;
  cont3: boolean = false;
  isModalOpen: boolean = false;

  selectedDate: Date = new Date();
  activities: IActivity[] = [];
  hourBlocks: { start: Date; end: Date }[] = [];

  newActivity: IActivity = { type: {name: '',numberOfMonitors: 0}, monitors: [], dateStart: new Date(), dateEnd: new Date()};
  activity1: IActivity = { type: {name: '',numberOfMonitors: 0}, monitors: [], dateStart: new Date(), dateEnd: new Date()};
  activity2: IActivity = { type: {name: '',numberOfMonitors: 0}, monitors: [], dateStart: new Date(), dateEnd: new Date()};
  activity3: IActivity = { type: {name: '',numberOfMonitors: 0}, monitors: [], dateStart: new Date(), dateEnd: new Date()};

  goBack(): void {
    this.selectedDate.setDate(this.selectedDate.getDate() - 1);
    this.updateActivities();
    this.ifDateIsChanged();
  }

  advance(): void {
    this.selectedDate.setDate(this.selectedDate.getDate() + 1);
    this.updateActivities();
    this.ifDateIsChanged();
  }


  generateHourBlocks(): void {
    // Bloques de tiempo específicos
    const blocks = [
      { start: '10:00', end: '11:30' },
      { start: '13:30', end: '15:00' },
      { start: '17:30', end: '19:00' },
    ];

    this.hourBlocks = blocks.map((block) => {
      const start = new Date(this.selectedDate);
      const [startHours, startMinutes] = block.start.split(':');
      start.setHours(Number(startHours), Number(startMinutes), 0);

      const end = new Date(this.selectedDate);
      const [endHours, endMinutes] = block.end.split(':');
      end.setHours(Number(endHours), Number(endMinutes), 0);

      return { start, end };
    });
  }

  getActividadesEnHora(start: Date, end: Date): IActivity[] {
    return this.activities.filter((activity) => {
      const activityStartDate = activity.dateStart;
      const activityEndDate = activity.dateEnd;

      return (
        start >= activityStartDate && end <= activityEndDate
      );
    });
  }

  private updateActivities(): void {
    this.activities = this.activityService.getActivities();
  }

  ifDateIsChanged(): void {
    

    const options: Intl.DateTimeFormatOptions = { month: 'long' };
    const month = new Intl.DateTimeFormat('es-ES', options).format(this.selectedDate);
    this.cont1 = false;
    this.cont2 = false;
    this.cont3 = false;

    this.activities = this.activityService.getActivities();
    var date1 = this.setHour(this.hour1);
    var date2 = this.setHour(this.hour2);
    var date3 = this.setHour(this.hour3);

    this.activities.forEach((activity) => {
        if (activity.dateStart == date1) {
            this.activity1 = activity;
            this.cont1 = true;
        } else if (activity.dateStart == date2) {
            this.activity2 = activity;
            this.cont2 = true;
        } else if (activity.dateStart == date3) {
            this.activity3 = activity;
            this.cont3 = true;
        }
    });
  }

  setHour(hour: string): Date {
    const [startHourHours, startHourMinutes] = hour.split(':');
    const newDate = new Date(this.selectedDate);
    newDate.setHours(Number(startHourHours), Number(startHourMinutes), 0);
    return newDate;
  }

}
