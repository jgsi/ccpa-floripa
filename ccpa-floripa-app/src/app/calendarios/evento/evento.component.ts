import { Component, OnInit } from '@angular/core';
import { CalendarioService } from '../calendario.service';
import { CalendarioDataService } from '../calendario-data.service';
import { Observable } from 'rxjs'
import { Evento } from '../evento';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {

  evento : Evento
  key : string = ''
  
  constructor(private calendarioService : CalendarioService , private calendarioDataService : CalendarioDataService) { }
  
  ngOnInit() {
    this.evento = new Evento()
    this.calendarioDataService.currentEvento.subscribe(data => {
      if(data.evento && data.key){
      this.evento = new Evento()
      this.evento.title = data.evento.title
      this.evento.start = data.evento.start
      this.evento.descricao = data.evento.descricao
      this.evento.endS = data.evento.endS
      }
    })
  }
  
  
  onSubmit(){
    if(this.key){
      this.calendarioService.update(this.evento,this.key)
    }
    else{
      this.calendarioService.insert(this.evento)
    }

    this.evento = new Evento();
  }  
}
