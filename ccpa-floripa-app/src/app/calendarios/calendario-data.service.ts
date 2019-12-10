import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import {Evento} from './evento'


@Injectable({
  providedIn: 'root'
})
export class CalendarioDataService {
  
  private eventoSource = new BehaviorSubject({    evento : null, key: '' })

  currentEvento = this.eventoSource.asObservable();


  constructor() { }

  changeEvento(evento : Evento, key : string){
    this.eventoSource.next({evento : Evento, key : key})
  }

}
