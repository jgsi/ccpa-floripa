import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Escala } from './escala';

@Injectable({
  providedIn: 'root'
})
export class EscalaDataService {
 
  private escalaSource = new BehaviorSubject({    escala : null, key: '' })

  currentEscala = this.escalaSource.asObservable();


  constructor() { }

  changeEscala(escala : Escala, key : string){
    this.escalaSource.next({escala : escala, key : key})
  }

}
