import { Injectable } from '@angular/core';
import { AngularFireAction, AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Departamento } from './departamento';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  constructor(private db: AngularFireDatabase) { }

  insert(departamento : Departamento){
    this.db.list('departamento').push(departamento)
    .then((result : any ) =>{
      console.log(result.key);
    })
  }

  update(departamento : Departamento, key : string){
    this.db.list('departamento').update(key, departamento)
    .catch((error : any) => {
      console.log(error)
    })
  }

  getAll() : Observable<AngularFireAction<firebase.database.DataSnapshot>[]> {
    return this.db.list('departamento', ref => ref.orderByChild('nome')).snapshotChanges()    
  }


  delete(key : String){
    this.db.object(`departamento/${key}`).remove()
  }
}
