import { Component, OnInit } from '@angular/core';
import { AngularFireAction } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { DepartamentoService } from '../departamentos/departamento.service';
import { Escala } from './escala';
import { EscalaDataService } from './escala-data.service';
import { EscalaService } from './escala.service';

@Component({
  selector: 'app-escalas',
  templateUrl: './escalas.component.html',
  styleUrls: ['./escalas.component.css']
})
export class EscalasComponent implements OnInit {

  departamentos$ : Observable<AngularFireAction<firebase.database.DataSnapshot>[]>
  escala : Escala
  key : string = ''

  constructor(private departamentoService : DepartamentoService, private escalaService: EscalaService,private escalaDataService: EscalaDataService) {}

  ngOnInit() {
    this.escala = new Escala()
    this.departamentos$ = this.departamentoService.getAll();
  }



  new(){
    this.escalaDataService.changeEscala(new Escala(), '')
  }
}
