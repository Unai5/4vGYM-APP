import { Component } from '@angular/core';
import { IActivity } from '../activity-service.service';
import { ActivityService } from '../activity-service.service';
import { CasillaActividadComponent } from '../casilla-actividad/casilla-actividad.component';
import { DateDisplayComponent } from '../date-display/date-display.component';
import { CasillaVaciaComponent } from '../casilla-vacia/casilla-vacia.component';
import { CalendarComponent } from '../calendar/calendar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivityTypeServiceService, IActivityType } from '../activity-type-service.service';
import { IMonitor, MonitorsServiceService } from '../monitors-service.service';
@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [ CommonModule, FormsModule, CasillaActividadComponent, DateDisplayComponent, CasillaVaciaComponent, CalendarComponent],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.css'
})

export class ActivitiesComponent {
  cuadroSeleccionadoId: number | undefined;
  mostrarFormulario: boolean = false;

  constructor(private activityService: ActivityService, private activityTypeService: ActivityTypeServiceService, private monitorsService: MonitorsServiceService) { 
    this.updateActivities();
  }

  actComponent: ActivitiesComponent = this;
  mostrarCasilla: boolean[] = [false, false, false]; 

  activityTypes = this.activityTypeService.getActivityTypes();
  selectedActivityType: IActivityType | undefined;

  monitors = this.monitorsService.getMonitors();
  selectedMonitor1: IMonitor| undefined;
  selectedMonitor2: IMonitor| undefined;


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

  abrirFormularioDesdeCasilla(cuadroId: number) {
    this.mostrarFormulario = true;
    this.cuadroSeleccionadoId = cuadroId;
  }

  onSubmit() {
    console.log('Tipo de Actividad:', this.selectedActivityType);
    console.log('Monitor 1:', this.selectedMonitor1);
    console.log('Monitor 2:', this.selectedMonitor2);

    var newDate: Date = this.selectedDate;
    if (this.cuadroSeleccionadoId == 1) {
      newDate.setHours(10,0,0)
    } else if (this.cuadroSeleccionadoId == 2) {
      newDate.setHours(13,30,0)
    } else if (this.cuadroSeleccionadoId == 3) {
      newDate.setHours(17,30,0)
    }
    var monitors: IMonitor[] = [];
    if (this.selectedActivityType != undefined) {
      if (this.selectedActivityType.numberOfMonitors == 1) {
        if (this.selectedMonitor1 != undefined && this.selectedMonitor2 == undefined) {
          this.selectedMonitor1.name = (this.selectedMonitor1.name);
          monitors.push(this.selectedMonitor1);
        } else {
          alert('La actividad seleccionada requiere 1 monitor.');
          return;
        }
      } else {
        if (this.selectedMonitor1 != undefined && this.selectedMonitor2 != undefined) {
          monitors.push(this.selectedMonitor1);
          monitors.push(this.selectedMonitor2);
        } else {
          alert('La actividad seleccionada requiere 2 monitores.');
          return;
        }
      }
    } else {
      alert('Selecciona un tipo de actividad');
      return;
    }
    var activity: IActivity = { type: this.selectedActivityType, monitors: monitors, date: newDate.toLocaleString()};
    this.activityService.addActivity(activity);
    this.updateActivities();
    this.cancelar();
    alert('Actividad añadida correctamente.');
  }

  cancelar(): void {
    this.mostrarFormulario = false;
  }
  

}
