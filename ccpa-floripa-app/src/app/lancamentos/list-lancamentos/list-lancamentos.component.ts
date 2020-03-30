import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { LancamentoService } from '../lancamento.service';
import { LancamentoDataService } from '../lancamento-data.service';
import { Lancamento } from '../lancamento';

@Component({
  selector: 'app-list-lancamentos',
  templateUrl: './list-lancamentos.component.html',
  styleUrls: ['./list-lancamentos.component.css']
})
export class ListLancamentosComponent implements OnInit {

  lancamentos : Observable<any>

  constructor(private lancamentoService : LancamentoService, private lancamentoDataService : LancamentoDataService) { }

  ngOnInit() {
    this.lancamentos  = this.lancamentoService.getAll()
  }

  delete(key : string){
    this.lancamentoService.delete(key)
  }

  edit(lancamento : Lancamento, key : string){
    this.lancamentoDataService.changeLancamento(lancamento,key)
  }

  new(){
    this.lancamentoDataService.changeLancamento(new Lancamento(), '')
  }


}
