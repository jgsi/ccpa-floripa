import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Lancamento } from './lancamento';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  constructor(private db: AngularFireDatabase) { }

  insert(lancamento : Lancamento){
    this.db.list('lancamento').push(lancamento)
    .then((result : any ) =>{
      console.log(result.key);
    })
  }

  update(lancamento : Lancamento, key : string){
    this.db.list('lancamento').update(key, lancamento)
    .catch((error : any) => {
      console.log(error)
    })
  }

  getAll(){
    return this.db.list('lancamento').snapshotChanges().pipe(
      map(changes => {
        return changes.map(c =>({ key : c.payload.key, ...c.payload.val()  as {}}))
      })
    )
  }

  delete(key : String){
    this.db.object(`lancamento/${key}`).remove()
  }
}
