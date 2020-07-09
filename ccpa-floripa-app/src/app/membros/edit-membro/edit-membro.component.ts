import { Component, OnInit } from '@angular/core';
import { Membro } from '../membro';
import { MembroService } from '../membro.service';
import { MembroDataService } from '../membro-data.service';
import { Router } from '@angular/router';
import { AngularFireAction } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { CelulaService } from 'src/app/celulas/celula.service';

@Component({
  selector: 'app-edit-membro',
  templateUrl: './edit-membro.component.html',
  styleUrls: ['./edit-membro.component.css']
})
export class EditMembroComponent implements OnInit {

  celulas$: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>
  membro : Membro
  key : string = ''

  constructor(private celulaService : CelulaService,private membroService : MembroService, private membroDataService : MembroDataService,
    private router : Router) { }

  ngOnInit() {
    this.celulas$  = this.celulaService.getAll()

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
    onSubmit(){
      if(this.key){
        this.membroService.update(this.membro,this.key)
      }
      else{
        this.membroService.insert(this.membro)
      }

      this.membro = new Membro()
      this.list()
    }

    list(){
      this.router.navigate(['membros'])
    }
  }
