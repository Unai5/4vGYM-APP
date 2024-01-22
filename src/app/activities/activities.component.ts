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
  mostrarFormularioModify: boolean = false;

  constructor(private activityService: ActivityService, private activityTypeService: ActivityTypeServiceService, private monitorsService: MonitorsServiceService) { 
    this.updateActivities();
  }

  activityModify: IActivity | undefined;

  actComponent: ActivitiesComponent = this;
  mostrarCasilla: boolean[] = [false, false, false]; 

  activityTypes = this.activityTypeService.getActivityTypes();
  selectedActivityType: string | undefined;
  selectedActivityTypeModify: string | undefined;

  monitors = this.monitorsService.getMonitors();
  selectedMonitor1: IMonitor | undefined;
  selectedMonitor2: IMonitor| undefined;
  selectedMonitor1Create: number | undefined;
  selectedMonitor2Create: number | undefined;

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

  abrirFormularioModificar(actividadId: number) {

    if (actividadId == -1) {
      alert('No hay actividad en esta casilla.');
      return;
    } else {
      this.mostrarFormularioModify = true;

      

      this.activities = this.activityService.getActivities();
      this.activities.forEach((activity) => {
        if (activity.id == actividadId) {
          this.activityModify = activity;
        }
      });
      
      this.selectedActivityTypeModify = this.activityModify?.type.name;
      this.monitors = this.monitorsService.getMonitors();
      this.monitors.forEach(monitor => {
        if (this.activityModify?.monitors[0].id == monitor.id) {
          this.selectedMonitor1 = monitor;
        }
      });

      if (this.activityModify?.monitors[1] != undefined && this.activityModify.type.numberOfMonitors == 2) {
        this.monitors.forEach(monitor => {
          if (this.activityModify?.monitors[1].id == monitor.id) {
            this.selectedMonitor2 = monitor;
          }
        });
      } else {
        this.selectedMonitor2 = undefined;
      }
    }
  }

  onSubmitModify() {
    if (this.activityModify == undefined) {
      alert('No se ha podido modificar la actividad.');
      this.cancelar();
      return;
    } else {
      
      if (this.selectedActivityTypeModify != undefined) {
        this.activityTypes = this.activityTypeService.getActivityTypes();
        this.activityTypes.forEach(actType => {
          if (this.activityModify != undefined&& actType.name == this.selectedActivityTypeModify) {
            this.activityModify.type = actType;
          }
        });
        if (this.activityModify.type) {
          this.activityModify.type.name = this.selectedActivityTypeModify;
        }
        if (this.selectedMonitor1 != undefined) {
          this.activityModify.monitors[0] = this.selectedMonitor1;
          if (this.selectedMonitor2 != undefined && this.activityModify.type.numberOfMonitors == 2) {
            this.activityModify.monitors[1] = this.selectedMonitor2;
          }
        } 
      }
      
      this.activityService.modifyActivity(this.activityModify);
      this.updateActivities();
      this.ifDateIsChanged();
      this.cancelar();
      alert('Actividad modificada correctamente.');
      return;
    }
  }


  onSubmit() {

    var newDate: Date = this.selectedDate;
    if (this.cuadroSeleccionadoId == 1) {
      newDate.setHours(10,0,0)
    } else if (this.cuadroSeleccionadoId == 2) {
      newDate.setHours(13,30,0)
    } else if (this.cuadroSeleccionadoId == 3) {
      newDate.setHours(17,30,0)
    }
    var allMonitors = this.monitorsService.getMonitors();
    var monitorIds: number[] = [];
    var monitors: IMonitor[] = [];

    var activityType: IActivityType | undefined;
    this.activityTypes = this.activityTypeService.getActivityTypes();

    this.activityTypes.forEach((activityTypeFor) => {
      if (activityTypeFor.name == this.selectedActivityType) {
        activityType = activityTypeFor;
      }
    });

    if (activityType != undefined) {
      if (activityType.numberOfMonitors == 1) {
        if (this.selectedMonitor1Create != undefined && (this.selectedMonitor2Create == undefined || this.selectedMonitor2Create == -1)) {
          monitorIds.push(this.selectedMonitor1Create);
        } else {
          alert('La actividad seleccionada requiere 1 monitor.');
          return;
        }
      } else {
        if (this.selectedMonitor1Create != undefined && this.selectedMonitor2Create != undefined) {
          monitorIds.push(this.selectedMonitor1Create ?? -1);
          monitorIds.push(this.selectedMonitor2Create ?? -1);
        } else {
          alert('La actividad seleccionada requiere 2 monitores.');
          return;
        }
      }
    } else {
      alert('Selecciona un tipo de actividad');
      return;
    }
    monitorIds.forEach((id) => {
      allMonitors.forEach((monitor) => {
        if (monitor.id == id) {
          monitors.push(monitor);
        }
      });
    });
    this.activities = this.activityService.getActivities();
    var newId: number;
    if (this.activities != null && this.activities != undefined && this.activities.length != 0) {
      newId = (this.activities[this.activities.length - 1]?.id ?? 0) + 1;
    } else {
      newId = 1;
    }
    var activity: IActivity = {id: newId, type: activityType, monitors: monitors, date: newDate.toLocaleString()};
    this.activityService.addActivity(activity);
    this.updateActivities();
    this.ifDateIsChanged();
    this.cancelar();
    alert('Actividad añadida correctamente.');
  }

  cancelar(): void {
    this.mostrarFormulario = false;
    this.mostrarFormularioModify = false;
  }
  

}
