import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-date-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './date-display.component.html',
  styleUrl: './date-display.component.css'
})
export class DateDisplayComponent {
  @Input() selectedDate: Date = new Date();

  @Output() dateBack = new EventEmitter<void>();
  @Output() dateAdvance = new EventEmitter<void>();

  goBack(): void {
    this.dateBack.emit();
  }

  advance(): void {
    this.dateAdvance.emit();
  }
}
