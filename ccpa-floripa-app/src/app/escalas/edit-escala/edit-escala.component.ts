import { Component, OnInit } from '@angular/core';
import { AngularFireAction } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Departamento } from 'src/app/departamentos/departamento';
import { DepartamentoService } from 'src/app/departamentos/departamento.service';
import { Escala } from '../escala';
import { EscalaDataService } from '../escala-data.service';
import { EscalaService } from '../escala.service';

@Component({
  selector: 'app-edit-escala',
  templateUrl: './edit-escala.component.html',
  styleUrls: ['./edit-escala.component.css']
})
export class EditEscalaComponent implements OnInit {

  departamentos$ : Observable<AngularFireAction<firebase.database.DataSnapshot>[]>
  escala : Escala
  key : string = ''

  constructor(private escalaService : EscalaService, private departamentoService: DepartamentoService,private escalaDataService: EscalaDataService,
    private router : Router) { }

  ngOnInit() {
    this.escala = new Escala()
    this.escala.nomes = ['', '']
    this.escala.dia = new Date()
    this.escala.departamento = new Departamento()
    this.departamentos$ = this.departamentoService.getAll();
    this.escalaDataService.currentEscala.subscribe( data =>{
      if(data.escala && data.key){
        this.escala = new Escala()
        this.escala.departamento = data.escala.departamento
        this.escala.dia = data.escala.dia
        this.escala.nomes = data.escala.nomes
        this.key = data.key
      }
    })
  }

    onSubmit(){
      // console.log(this.escala)
      if(this.key){
        this.escalaService.update(this.escala,this.key)
      }
      else{
        this.escalaService.insert(this.escala)
      }

      this.escala = new Escala()
      this.list()
    }

    list(){
      this.router.navigate(['escalas'])
    }

    trackByIdx(index: number, obj: any): any {
      return index;
    }

    adicionaNome(){
      this.escala.nomes.push('')
    }
}
