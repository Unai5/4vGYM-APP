import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {

  activeTab: string = 'actividades';


  
  selectTab(tab: string): void {
    this.activeTab = tab;
  }

  
  @Output() clickMonitors = new EventEmitter<void>();
  @Output() clickActivities = new EventEmitter<void>();
  changeTab(tab: string) {
    this.activeTab = tab;
    if (tab === 'actividades') {
      this.clickActivities.emit();
    } else if (tab === 'monitores') {
      this.clickMonitors.emit();
    }
  }

}
