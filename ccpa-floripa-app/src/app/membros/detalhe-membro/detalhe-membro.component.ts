import { Component, OnInit } from '@angular/core';
import { MembroService } from '../membro.service';
import { MembroDataService } from '../membro-data.service';
import { Membro } from '../membro';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalhe-membro',
  templateUrl: './detalhe-membro.component.html',
  styleUrls: ['./detalhe-membro.component.css']
})
export class DetalheMembroComponent implements OnInit {
  membro: Membro;
  key: string;

  constructor(private membroService : MembroService, private membroDataService : MembroDataService, router : Router) { }

  ngOnInit() {
    this.membro = new Membro()
    this.membroDataService.currentMembro.subscribe( data =>{
      if(data.membro && data.key){
        this.membro = new Membro()
        this.membro.nome = data.membro.nome
        this.membro.sexo = data.membro.sexo
        this.membro.dataMembresia = data.membro.dataMembresia
        this.membro.dataNascimento  = data.membro.dataNascimento
        this.membro.endereco = data.membro.endereco
        this.membro.celular = data.membro.celular
        this.membro.email = data.membro.email
        this.membro.celula = data.membro.celula
        this.key = data.key
      }
    })
  }

  delete(key : string){
    this.membroService.delete(key)  
  }

  edit(membro : Membro, key : string){
    this.membroDataService.changeMembro(membro,key)
  }

}
