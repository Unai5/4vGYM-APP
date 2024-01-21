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

  @Output() dateChanged = new EventEmitter<Date>();

  goBack(): void {
    this.dateBack.emit();
    this.emitDateChange();
  }

  advance(): void {
    this.dateAdvance.emit();
    this.emitDateChange();
  }

  formatSpanishDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    };
    return new Intl.DateTimeFormat('es-ES', options).format(date);
  }

  private emitDateChange(): void {
    this.dateChanged.emit(this.selectedDate);
  }


}
