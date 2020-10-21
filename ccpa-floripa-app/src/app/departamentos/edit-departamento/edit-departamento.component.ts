import { Component, OnInit } from '@angular/core';
import { AngularFireAction } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Departamento } from '../departamento';
import { DepartamentoDataService } from '../departamento-data.service';
import { DepartamentoService } from '../departamento.service';

@Component({
  selector: 'app-edit-departamento',
  templateUrl: './edit-departamento.component.html',
  styleUrls: ['./edit-departamento.component.css']
})
export class EditDepartamentoComponent implements OnInit {

  departamento : Departamento
  key : string = ''

  constructor(private departamentoService : DepartamentoService, private departamentoDataService : DepartamentoDataService,
    private router : Router) { }

  ngOnInit() {
    this.departamento = new Departamento()
    this.departamentoDataService.currentDepartamento.subscribe( data =>{
      if(data.departamento && data.key){
        this.departamento = new Departamento()
        this.departamento.nome = data.departamento.nome
        this.departamento.lider = data.departamento.lider
        this.key = data.key
      }
    })
  }
    onSubmit(){
      if(this.key){
        this.departamentoService.update(this.departamento,this.key)
      }
      else{
        this.departamentoService.insert(this.departamento)
      }

      this.departamento = new Departamento()
      this.list()
    }

    list(){
      this.router.navigate(['departamentos'])
    }
}
