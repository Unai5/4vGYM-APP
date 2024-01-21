import { Component, Input } from '@angular/core';
import { IActivity } from '../activity-service.service';
import { IMonitor } from '../monitors-service.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-casilla-actividad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './casilla-actividad.component.html',
  styleUrl: './casilla-actividad.component.css'
})
export class CasillaActividadComponent {
  public delete(): void{

  }
  public modify(): void{

  }
  @Input() actividad: IActivity | undefined;
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
