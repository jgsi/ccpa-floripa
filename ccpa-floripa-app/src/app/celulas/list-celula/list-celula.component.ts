import { Component, OnInit } from '@angular/core';
import { Celula } from '../celula';
import { CelulaService } from '../celula.service';
import { CelulaDataService } from '../celula-data.service';
import { Observable } from 'rxjs'


@Component({
  selector: 'app-list-celula',
  templateUrl: './list-celula.component.html',
  styleUrls: ['./list-celula.component.css']
})
export class ListCelulaComponent implements OnInit {

  celulas : Observable<any>
  filtro : string|null

  constructor(private celulaService : CelulaService, private celulaDataService : CelulaDataService) { }

  ngOnInit() {
    this.celulas  = this.celulaService.getAll()
  }

  delete(key : string){
    this.celulaService.delete(key)
  }

  edit(celula : Celula, key : string){
    this.celulaDataService.changeCelula(celula,key)
  }

  new(){
    this.celulaDataService.changeCelula(new Celula(), '')
  }

}
