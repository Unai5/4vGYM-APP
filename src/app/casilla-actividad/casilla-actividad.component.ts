import { Component, Input } from '@angular/core';
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

  public delete(): void{
    this.activityService.removeActivity(this.actividad?.id || 0);
    this.activitiesComponent.ifDateIsChanged();
  }
  public modify(): void{

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
    }
  }
}
