import { Component } from '@angular/core';
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
import { ActivitiesComponent } from './activities/activities.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ActivitiesComponent, CasillaVaciaComponent, CasillaActividadComponent, CommonModule, RouterOutlet, HeaderComponent, TabsComponent, CalendarComponent, DateDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css', 
})
export class AppComponent {
  constructor() {}
}