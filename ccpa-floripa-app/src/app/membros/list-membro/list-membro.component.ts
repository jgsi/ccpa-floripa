import { Component, OnInit } from '@angular/core';
import { Membro } from '../membro';
import { MembroService } from '../membro.service';
import { MembroDataService } from '../membro-data.service';
import { Observable, Subject, BehaviorSubject } from 'rxjs'
import { map, switchMap } from 'rxjs/operators';
import { AngularFireAction, AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-list-membro',
  templateUrl: './list-membro.component.html',
  styleUrls: ['./list-membro.component.css']
})
export class ListMembroComponent implements OnInit {

  membros$ : Observable<AngularFireAction<firebase.database.DataSnapshot>[]>
  filtro : string|null

  constructor(private membroService : MembroService, private membroDataService : MembroDataService) { 
  }

    ngOnInit() {
      this.membros$ = this.membroService.getAll()
    }

  new(){
    this.membroDataService.changeMembro(new Membro(), '')
  }

  edit(membro : Membro, key : string){
    this.membroDataService.changeMembro(membro,key)
    console.log(membro)
    console.log(key)
  }

}
