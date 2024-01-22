import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivityService, IActivity } from '../activity-service.service';
import { IMonitor } from '../monitors-service.service';
import { CommonModule } from '@angular/common';
import { ActivitiesComponent } from '../activities/activities.component';
@Component({
  selector: 'app-casilla-actividad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './casilla-actividad.component.html',
  styleUrl: './casilla-actividad.component.css'
})
export class CasillaActividadComponent {
  constructor(private activityService: ActivityService) { }

  @Input() cuadroId: number | undefined;
  @Output() abrirFormularioEvent = new EventEmitter<number>();
  public modify(): void{
    this.abrirFormularioEvent.emit(this.actividad?.id || -1);
  }

  public delete(): void{
    this.activityService.removeActivity(this.actividad?.id || 0);
    this.activitiesComponent.ifDateIsChanged();
  }
  @Input() actividad: IActivity | undefined;
  @Input() activitiesComponent!: ActivitiesComponent;
  monitors: IMonitor[] = [];
  type: string = '';
  numberOfMonitors: number = 0;

  ngOnInit(): void {
    if (this.actividad) {
      this.monitors = this.actividad.monitors || [];
      this.type = this.actividad.type.name || '';
      this.numberOfMonitors = this.actividad.type.numberOfMonitors || 0;
      if (this.actividad == undefined) {
        this.type = 'BodyPump';
      } else {
        this.type = this.actividad.type.name || '';
      }
      

    }
  }
}
