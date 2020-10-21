import { Component, OnInit } from '@angular/core';
import { AngularFireAction } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Departamento } from '../departamento';
import { DepartamentoDataService } from '../departamento-data.service';
import { DepartamentoService } from '../departamento.service';

@Component({
  selector: 'app-list-departamento',
  templateUrl: './list-departamento.component.html',
  styleUrls: ['./list-departamento.component.css']
})
export class ListDepartamentoComponent implements OnInit {

  departamentos$ : Observable<AngularFireAction<firebase.database.DataSnapshot>[]>
  filtro : string|null

  constructor(private departamentoService : DepartamentoService, private departamentoDataService : DepartamentoDataService) { 
  }

    ngOnInit() {
      this.departamentos$ = this.departamentoService.getAll()
    }

  new(){
    this.departamentoDataService.changeDepartamento(new Departamento(), '')
  }

  edit(departamento : Departamento, key : string){
    this.departamentoDataService.changeDepartamento(departamento,key)
    console.log(departamento)
    console.log(key)
  }
}
