import { Component, OnInit,  Input} from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import ptLocale from '@fullcalendar/core/locales/pt';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})


export class CalendarioComponent implements OnInit {
   
  calendarPlugins = [dayGridPlugin];
  
  myDateClick(arg){
    alert(arg.dateStr);
    
  }

  constructor() {
  }
  
  ngOnInit() {
     
  }
  
}
