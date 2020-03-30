import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
import { Celula} from './celula'
import {map } from 'rxjs/operators'


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

  getAll(){
    return this.db.list('celula').snapshotChanges().pipe(
      map(changes => {
        return changes.map(c =>({ key : c.payload.key, ...c.payload.val() as {}}))
      })
    )
  }

  delete(key : String){
    this.db.object(`celula/${key}`).remove()
  }

}
