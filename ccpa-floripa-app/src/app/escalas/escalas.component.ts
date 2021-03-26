import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAction } from '@angular/fire/database';
import { MatSort } from '@angular/material';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DepartamentoService } from '../departamentos/departamento.service';
import { Escala } from './escala';
import { EscalaDataService } from './escala-data.service';
import { EscalaService } from './escala.service';

@Component({
  selector: 'app-escalas',
  templateUrl: './escalas.component.html',
  styleUrls: ['./escalas.component.css']
})
export class EscalasComponent implements OnInit, AfterViewInit {

  departamentos$ : Observable<AngularFireAction<firebase.database.DataSnapshot>[]>
  escalas$ : Observable<AngularFireAction<firebase.database.DataSnapshot>[]>
  escala : Escala
  key : string = ''
  filtro : string
  dataSource: MatTableDataSource<any>
  displayedColumns = ['data', 'nomes']

  @ViewChild(MatSort, null) sort: MatSort

  constructor(private authService : AuthService,private departamentoService : DepartamentoService, private escalaService: EscalaService,private escalaDataService: EscalaDataService) {}
  ngAfterViewInit(): void {
    this.escalaService.getAll().subscribe(data => {
      this.dataSource = new MatTableDataSource(data); 
      this.dataSource.sort = this.sort;
    })
  }

  ngOnInit() {
    this.escala = new Escala()
    this.departamentos$ = this.departamentoService.getAll();
    this.escalas$ = this.escalaService.getAll();
  }

  usuarioLogado(){
    try{
      return this.authService.isLoggedIn ? '    '+ this.authService.userData.displayName : ''
    } catch (error){
     // console.error(error)
    }
  }


  new(){
    this.escalaDataService.changeEscala(new Escala(), '')
  }

  delete(key : string){
    this.escalaService.delete(key)
  }

  edit(escala : Escala, key : string){
    this.escalaDataService.changeEscala(escala,key)
  }

}
