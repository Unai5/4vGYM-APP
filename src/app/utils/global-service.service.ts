import { Injectable } from '@angular/core';
import { LoggerServiceService } from './logger-service.service';

export interface Monitor {
  id?: number;
  nombre: string;
  email: string;
  telefono: string;
}

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {
  monitors: Monitor[];

  constructor(private logger: LoggerServiceService) {
    this.monitors = [
      {
        id: 1,
        nombre: "Unai",
        email: "unaiVildarraz@gmail.es",
        telefono: "123456789"
      },
      {
        id: 2,
        nombre: "Unai",
        email: "unaiVildarraz@gmail.es",
        telefono: "123456789"
      },
      {
        id: 3,
        nombre: "Unai",
        email: "unaiVildarraz@gmail.es",
        telefono: "123456789"
      },
      {
        id: 4,
        nombre: "Unai",
        email: "unaiVildarraz@gmail.es",
        telefono: "123456789"
      },
      {
        id: 5,
        nombre: "Unai",
        email: "unaiVildarraz@gmail.es",
        telefono: "123456789"
      }
    ];
  }

  getMonitors() {
    return this.monitors;
  }

  addMonitor(monitor: Monitor) {
    var finalMonitor: Monitor = this.monitors[this.monitors.length - 1];
    if (finalMonitor) {
      monitor.id = finalMonitor.id ? finalMonitor.id + 1 : 0;
    } else {
      monitor.id = 0;
    }
    this.monitors = this.monitors.concat(monitor);
  }

  deleteMonitor(monitorId: number) {
    this.monitors = this.monitors.filter(monitor => monitor.id !== monitorId);
  }
}
