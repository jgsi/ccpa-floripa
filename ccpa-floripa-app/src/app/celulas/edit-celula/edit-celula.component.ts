import { Component, OnInit } from '@angular/core';
import { Celula } from '../celula';
import { CelulaService } from '../celula.service';
import { CelulaDataService } from '../celula-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-celula',
  templateUrl: './edit-celula.component.html',
  styleUrls: ['./edit-celula.component.css']
})
export class EditCelulaComponent implements OnInit {

  celula : Celula
  key : string = ''

  constructor(private celulaService : CelulaService, private celulaDataService : CelulaDataService,
    private router : Router) { }

  ngOnInit() {
    this.celula = new Celula()
    this.celulaDataService.currentCelula.subscribe( data =>{
      if(data.celula && data.key){
        this.celula = new Celula()
        this.celula.nome = data.celula.nome
        this.celula.anfitriao = data.celula.anfitriao
        this.celula.dataInicio = data.celula.dataInicio
        this.celula.diaSemana  = data.celula.diaSemana
        this.celula.endereco = data.celula.endereco
        this.celula.horario = data.celula.horario
        this.celula.lider = data.celula.lider
        this.celula.numero = data.celula.numero
        this.key = data.key
      }
    })
  }
    onSubmit(){
      if(this.key){
        this.celulaService.update(this.celula,this.key)
      }
      else{
        this.celulaService.insert(this.celula)
      }

      this.celula = new Celula()
      this.list()
    }

    list(){
      this.router.navigate(['celulas'])
    }
  }
