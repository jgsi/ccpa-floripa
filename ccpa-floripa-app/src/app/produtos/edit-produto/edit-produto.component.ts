import { Component, OnInit } from '@angular/core';
import { Produto } from '../../produtos/shared/produto'
import { ProdutoService } from '../../produtos/shared/produto.service'
import { ProdutoDataService } from '../../produtos/shared/produto-data.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-produto',
  templateUrl: './edit-produto.component.html',
  styleUrls: ['./edit-produto.component.css']
})
export class EditProdutoComponent implements OnInit {

  produto : Produto
  key : string

  constructor(private produtoService : ProdutoService, private produtoDataService : ProdutoDataService,
    private router : Router) { }

  ngOnInit() {
    this.produto = new Produto()
    this.produtoDataService.currentProduto.subscribe( data => {
      if(data.produto && data.key){
        this.produto = new Produto()
        this.produto.nome = data.produto.nome
        this.produto.valor        = data.produto.valor
        this.produto.tamanho = data.produto.tamanho
        this.produto.peso = data.produto.peso
        this.produto.descricao = data.produto.descricao
        this.produto.cor = data.produto.cor
        this.produto.tipo = data.produto.tipo
        this.produto.dataEntrada = data.produto.dataEntrada ? data.produto.dataEntrada : ''
        this.produto.dataVenda = data.produto.dataVenda ? data.produto.dataVenda : ''
        this.key = data.key
      }
    })
  }

  onSubmit(){
    if(this.key){
      this.produtoService.update(this.produto, this.key)
    } 
    else {
      this.produtoService.insert(this.produto)      
    }

    this.produto = new Produto()
    this.list()
  }

  list(){
    this.router.navigate(['produtos'])
  }
}
