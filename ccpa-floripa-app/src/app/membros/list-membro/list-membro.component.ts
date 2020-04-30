import { Component, OnInit } from '@angular/core';
import { Membro } from '../membro';
import { MembroService } from '../membro.service';
import { MembroDataService } from '../membro-data.service';
import { Observable } from 'rxjs'


@Component({
  selector: 'app-list-membro',
  templateUrl: './list-membro.component.html',
  styleUrls: ['./list-membro.component.css']
})
export class ListMembroComponent implements OnInit {

  membros : Observable<any>

  constructor(private membroService : MembroService, private membroDataService : MembroDataService) { }

  ngOnInit() {
    this.membros  = this.membroService.getAll()
  }

  new(){
    this.membroDataService.changeMembro(new Membro(), '')
  }

  edit(membro : Membro, key : string){
    this.membroDataService.changeMembro(membro,key)
  }

}
