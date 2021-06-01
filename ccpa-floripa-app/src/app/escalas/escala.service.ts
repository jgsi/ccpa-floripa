import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireAction } from '@angular/fire/database';
import { Observable } from 'rxjs';
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

  getAll() : Observable<AngularFireAction<firebase.database.DataSnapshot>[]> {
    return this.db.list<Escala>('escala', ref => ref.orderByChild('dia')).snapshotChanges()    
  }


  delete(key : String){
    this.db.object(`escala/${key}`).remove()
  }
}
