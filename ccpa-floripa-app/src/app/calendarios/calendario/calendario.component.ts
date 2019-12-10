import { Component, OnInit,  ViewChild} from '@angular/core';
import ptLocale from '@fullcalendar/core/locales/pt';
import { FullCalendarComponent } from '@fullcalendar/angular'
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; // for dateClick
import { CalendarioService } from '../calendario.service';
import { CalendarioDataService } from '../calendario-data.service';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})


export class CalendarioComponent implements OnInit {
  
  eventos : Observable<any>
  
  constructor(private calendarioService : CalendarioService,private calendarioDataService : CalendarioService) {
  }
  
  ngOnInit() {
    this.eventos = this.calendarioService.getAll()
  }

  calendarVisible = true 
  calendarPlugins = [dayGridPlugin, interactionPlugin]
  calendarEvents: EventInput[] = [];
  

  toggleVisible() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleDateClick(arg) {
    if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
      this.calendarEvents = this.calendarEvents.concat({ 
        title: 'Evento',
        start: arg.date,
        allDay: arg.allDay
      })
    }
  }
  
  
}
