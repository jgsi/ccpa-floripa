import { Injectable } from '@angular/core';
import { AngularFireStorage ,  AngularFireStorageReference, AngularFireUploadTask  } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { Audios } from './audios';


@Injectable({
  providedIn: 'root'
})

export class AudiosService {

  constructor(private db: AngularFireDatabase) { }

  insert(audio : Audios){
    this.db.list('audio').push(audio)
    .then((result : any ) =>{
      console.log(result.key);
    })
  }

  update(audio : Audios, key : string){
    this.db.list('audio').update(key, audio)
    .catch((error : any) => {
      console.log(error)
    })
  }

  get(key : string){
    return this.db.object(`audio/${key}`)
  }

  getAll(){
    return this.db.list('audio').snapshotChanges().pipe(
      map(changes => {
        return changes.map(c =>({ key : c.payload.key, ...c.payload.val()}))
      })
    )
  }

  delete(key : String){
    this.db.object(`audio/${key}`).remove()
  }

}
