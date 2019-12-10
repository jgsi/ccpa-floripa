import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
import { Evento} from './evento'
import {map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CalendarioService {
  
  
  constructor(private db: AngularFireDatabase) { }

  insert(evento : Evento){
    this.db.list('evento').push(evento)
    .then((result : any ) =>{
      console.log(result.key);
    })
  }

  update(evento : Evento, key : string){
    this.db.list('evento').update(key, evento)
    .catch((error : any) => {
      console.log(error)
    })
  }

  getAll(){
    return this.db.list('evento').snapshotChanges().pipe(
      map(changes => {
        return changes.map(c =>({ key : c.payload.key, ...c.payload.val()}))
      })
    )
  }

  delete(key : String){
    this.db.object(`evento/${key}`).remove()
  }

}
