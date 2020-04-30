import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
import { Membro} from './membro'
import {map } from 'rxjs/operators'


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

  getAll(){
    return this.db.list('membro', ref => ref.orderByChild('nome')).snapshotChanges().pipe(
      map(changes => {
        return changes.map(c =>({ key : c.payload.key, ...c.payload.val() as {}}))
      })
    )
  }

  delete(key : String){
    this.db.object(`membro/${key}`).remove()
  }
}
