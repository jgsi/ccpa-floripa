import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import {Celula} from './celula'

@Injectable({
  providedIn: 'root'
})
export class CelulaDataService {

  private celulaSource = new BehaviorSubject({    celula : null, key: '' })

  currentCelula = this.celulaSource.asObservable();


  constructor() { }

  changeCelula(celula : Celula, key : string){
    this.celulaSource.next({celula : celula, key : key})
  }

}
