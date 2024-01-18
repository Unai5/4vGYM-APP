import { Component } from '@angular/core'; // Import the Component decorator
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TabsComponent } from './tabs/tabs.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DateDisplayComponent } from './date-display/date-display.component';
import { IActivity } from './activity-service.service';
import { ActivityService } from './activity-service.service';
import { CasillaActividadComponent } from './casilla-actividad/casilla-actividad.component';
import { CasillaVaciaComponent } from './casilla-vacia/casilla-vacia.component';
import { MonitorsComponent } from './monitors/monitors.component';
import 'tslib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CasillaVaciaComponent, CasillaActividadComponent, CommonModule, RouterOutlet, HeaderComponent, TabsComponent, CalendarComponent, DateDisplayComponent, MonitorsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  selectedDate: Date = new Date();
  activities: IActivity[] = [];
  hourBlocks: { start: Date; end: Date }[] = [];

  constructor(private activityService: ActivityService) {
    this.generateHourBlocks();  
    this.updateActivities();
  }

  goBack(): void {
    this.selectedDate.setDate(this.selectedDate.getDate() - 1);
    this.updateActivities();
  }

  advance(): void {
    this.selectedDate.setDate(this.selectedDate.getDate() + 1);
    this.updateActivities();
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
    this.activities = this.activityService.getActivitiesForDate(this.selectedDate);
  }

}