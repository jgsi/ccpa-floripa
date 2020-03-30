import { Component, OnInit } from '@angular/core';
import { LancamentoService } from '../lancamento.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Lancamento } from '../lancamento';
import { LancamentoDataService } from '../lancamento-data.service';

@Component({
  selector: 'app-edit-lancamento',
  templateUrl: './edit-lancamento.component.html',
  styleUrls: ['./edit-lancamento.component.css']
})
export class EditLancamentoComponent implements OnInit {

  lancamento : Lancamento
  key : string = ''

  constructor(private lancamentoService : LancamentoService, private lancamentoDataService : LancamentoDataService,
    private router : Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.lancamento = new Lancamento()
    this.lancamentoDataService.currentLancamento.subscribe( data =>{
      if(data.lancamento && data.key){
        this.lancamento = new Lancamento()
        this.lancamento.nome = data.lancamento.nome
        this.lancamento.data = data.lancamento.data
        this.lancamento.valor = data.lancamento.valor
        this.lancamento.especifica  = data.lancamento.especifica
        this.lancamento.tipo  = data.lancamento.tipo
        this.key = data.key
      } else {
        this.activatedRoute.paramMap.subscribe(params => {
          this.lancamento.tipo = params.get('tipo')
        })
      }
    })
  }
    onSubmit(){
      if(this.key){
        this.lancamentoService.update(this.lancamento,this.key)
      }
      else{
        this.lancamentoService.insert(this.lancamento)
      }

      this.lancamento = new Lancamento()
      this.list()
    }

    list(){
      this.router.navigate(['lancamentos'])
    }
  
}
