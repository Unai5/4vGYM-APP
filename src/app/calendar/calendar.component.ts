import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DateAdapter } from '@angular/material/core';
import { CustomDateAdapter } from './CustomDateAdapter';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [BsDatepickerModule, FormsModule ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
  providers: [
    {provide: DateAdapter, useClass: CustomDateAdapter}
  ]
})
export class CalendarComponent {
  selectedDate: Date = new Date();

  @Output() dateChanged = new EventEmitter<Date>();

  onDateChangedByButton(newDate: Date): void {
    this.selectedDate = newDate;
    this.dateChanged.emit(newDate);
  }
}

