import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireAction } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Escala } from './escala';

@Injectable({
  providedIn: 'root'
})
export class EscalaService {

  constructor(private db: AngularFireDatabase) { }

  insert(escala : Escala){
    this.db.list('escala').push(escala)
    .then((result : any ) =>{
      console.log(result.key);
    })
  }

  update(escala : Escala, key : string){
    this.db.list('escala').update(key, escala)
    .catch((error : any) => {
      console.log(error)
    })
  }

  getAll() : Observable<any> {
    return this.db.list<Escala>('escala', ref => ref).snapshotChanges().pipe(
      map(changes => {
        return  changes.map(change => ({key: change.payload.key, ...change.payload.val() }))
      })
    )    
  }


  delete(key : String){
    this.db.object(`escala/${key}`).remove()
  }
}
