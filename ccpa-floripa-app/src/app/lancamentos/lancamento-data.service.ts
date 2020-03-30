import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Lancamento } from './lancamento';

@Injectable({
  providedIn: 'root'
})
export class LancamentoDataService {

  private lancamentoSource = new BehaviorSubject({    lancamento : null, key: '' })

  currentLancamento = this.lancamentoSource.asObservable();


  constructor() { }

  changeLancamento(lancamento : Lancamento, key : string){
    this.lancamentoSource.next({lancamento : lancamento, key : key})
  }
}
