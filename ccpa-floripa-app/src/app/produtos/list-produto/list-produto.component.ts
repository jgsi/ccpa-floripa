import { Component, OnInit } from '@angular/core';
import { Produto } from '../../produtos/shared/produto'
import { ProdutoService } from '../../produtos/shared/produto.service'
import { ProdutoDataService } from '../../produtos/shared/produto-data.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-list-produto',
  templateUrl: './list-produto.component.html',
  styleUrls: ['./list-produto.component.css']
})
export class ListProdutoComponent implements OnInit {
  produtos : Observable<any>

  constructor(private produtoService : ProdutoService, private produtoDataService : ProdutoDataService) { }

  ngOnInit() {
    this.produtos = this.produtoService.getAll()
  }

  delete(key: string){
    this.produtoService.delete(key)
  }

  edit(produto: Produto, key: string){
    this.produtoDataService.changeProduto(produto, key)
  }

}
