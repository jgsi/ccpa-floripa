import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireAction } from '@angular/fire/database'
import { Membro} from './membro'
import {map } from 'rxjs/operators'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MembroService {

  constructor(private db: AngularFireDatabase) { }

  insert(membro : Membro){
    this.db.list('membro').push(membro)
    .then((result : any ) =>{
      console.log(result.key);
    })
  }

  update(membro : Membro, key : string){
    this.db.list('membro').update(key, membro)
    .catch((error : any) => {
      console.log(error)
    })
  }

  getAll() : Observable<AngularFireAction<firebase.database.DataSnapshot>[]> {
    return this.db.list('membro', ref => ref.orderByChild('nome')).snapshotChanges()    
  }


  delete(key : String){
    this.db.object(`membro/${key}`).remove()
  }
}
