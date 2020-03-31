import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import {Membro} from './membro'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MembroDataService {
  
  private membroSource = new BehaviorSubject({    membro : null, key: '' })

  currentMembro = this.membroSource.asObservable();


  constructor() { }

  changeMembro(membro : Membro, key : string){
    this.membroSource.next({membro : membro, key : key})
  }

}
