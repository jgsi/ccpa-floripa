import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireAction } from '@angular/fire/database'
import { Celula} from './celula'
import {map } from 'rxjs/operators'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CelulaService {

  constructor(private db: AngularFireDatabase) { }

  insert(celula : Celula){
    this.db.list('celula').push(celula)
    .then((result : any ) =>{
      console.log(result.key);
    })
  }

  update(celula : Celula, key : string){
    this.db.list('celula').update(key, celula)
    .catch((error : any) => {
      console.log(error)
    })
  }

  getAll() : Observable<AngularFireAction<firebase.database.DataSnapshot>[]>  {
    return this.db.list('celula', ref => ref.orderByChild('numero')).snapshotChanges()
  }

  delete(key : String){
    this.db.object(`celula/${key}`).remove()
  }

}
