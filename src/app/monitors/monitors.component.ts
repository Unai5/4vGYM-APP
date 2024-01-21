import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GlobalServiceService, Monitor } from '../utils/global-service.service';
import { CarouselModule } from 'primeng/carousel';
import { __importDefault } from 'tslib'; // Import the tslib module

@Component({
  selector: 'app-monitors',
  imports: [CommonModule, CarouselModule, FormsModule],
  templateUrl: './monitors.component.html',
  styleUrls: ['./monitors.component.scss'],
  standalone: true
})


export class MonitorsComponent implements OnInit {
  monitors: Monitor[] = [];
  numVisible: number = 3;
  newMonitor: Monitor = { nombre: '', email: '', telefono: '' };
  isModalOpen: boolean = false;
  searchTerm: string = '';
  filteredMonitors: Monitor[] = [];

  constructor(private globalService: GlobalServiceService) {}

  ngOnInit(): void {
    this.updateVisible();
  }

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.newMonitor = { nombre: '', email: '', telefono: '' };
  }

  loadMonitor(monitor: Monitor): void {
    this.newMonitor = { ...monitor };
    this.openModal();
  }

  addOrUpdateMonitor(): void {
    const existingMonitor = this.monitors.find(m => m.id === this.newMonitor.id);
  
    if (existingMonitor) {
      Object.assign(existingMonitor, this.newMonitor);
    } else {
      this.globalService.addMonitor(this.newMonitor);
      this.updateVisible();
    }
  
    this.resetFormAndCloseModal();
  }

  removeMonitor(monitorId: number | undefined): void {
    if (monitorId !== undefined) {
      this.globalService.deleteMonitor(monitorId);
      this.updateVisible();
    }
  }


  updateVisible(): void {
    this.monitors = this.globalService.getMonitors();
    this.filteredMonitors = this.searchTerm
      ? this.monitors.filter(monitor => monitor.nombre.toLowerCase().includes(this.searchTerm.toLowerCase()))
      : this.monitors;

    this.numVisible = Math.min(
      this.responsiveOptions.find(opt => window.innerWidth <= Number(opt.breakpoint))?.numVisible || 3,
      this.filteredMonitors.length
    );
  }
  responsiveOptions = [
    { breakpoint: "1024px", numVisible: 3, numScroll: 3 },
    { breakpoint: "768px", numVisible: 2, numScroll: 2 },
    { breakpoint: "560px", numVisible: 1, numScroll: 1 }
  ];
  
  private resetFormAndCloseModal(): void {
    this.newMonitor = { nombre: '', email: '', telefono: '' };
    this.closeModal();
  }
}

