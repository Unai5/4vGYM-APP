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
<<<<<<< HEAD
import { ActivitiesComponent } from './activities/activities.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ActivitiesComponent, CasillaVaciaComponent, CasillaActividadComponent, CommonModule, RouterOutlet, HeaderComponent, TabsComponent, CalendarComponent, DateDisplayComponent],
=======
import { MonitorsComponent } from './monitors/monitors.component';
import 'tslib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CasillaVaciaComponent, CasillaActividadComponent, CommonModule, RouterOutlet, HeaderComponent, TabsComponent, CalendarComponent, DateDisplayComponent, MonitorsComponent],
>>>>>>> f8115f20616693f6c391ac7bf23a11294886ed2b
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor() {}
}