import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Departamento } from './departamento';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoDataService {
  
  private departamentoSource = new BehaviorSubject({    departamento : null, key: '' })

  currentDepartamento = this.departamentoSource.asObservable();


  constructor() { }

  changeDepartamento(departamento : Departamento, key : string){
    this.departamentoSource.next({departamento : departamento, key : key})
  }

}
