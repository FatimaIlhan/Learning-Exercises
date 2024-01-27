import { Component } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {

  viewDate: Date = new Date();
  events: CalendarEvent[] = [];

eventClicked($event: { event: import("calendar-utils").CalendarEvent<any>; sourceEvent: MouseEvent|KeyboardEvent; }) {
throw new Error('Method not implemented.');
}
prevWeek(): void {
  const date = new Date(this.viewDate);
  date.setDate(date.getDate() - 7);
  this.viewDate = date;
}

nextWeek(): void {
  const date = new Date(this.viewDate);
  date.setDate(date.getDate() + 7);
  this.viewDate = date;
}

addEvent(): void {
  this.events.push(
    {
      start: new Date(2024, 0, 29, 8, 0),
      end: new Date(2024, 0, 29, 9, 0),
      title: 'Event 1',
      color: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
      },
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    },
    {
      start: new Date(2024, 0, 29, 13, 30),
      end: new Date(2024, 0, 29, 16, 0),
      title: 'Event 2',
      color: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
      },
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    },
    // Add more events here...
  );
}

}
