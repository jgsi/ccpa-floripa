import { Injectable } from '@angular/core';
import { AngularFireStorage ,  AngularFireStorageReference  } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { Imagem } from './imagem';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class ImagemService {
  
  constructor(private db: AngularFireDatabase) { }

  insert(imagem : Imagem){
    this.db.list('imagem').push(imagem)
    .then((result : any ) =>{
      console.log(result.key);
    })
  }

  update(imagem : Imagem, key : string){
    this.db.list('imagem').update(key, imagem)
    .catch((error : any) => {
      console.log(error)
    })
  }

  getAll(){
    return this.db.list('imagem').snapshotChanges().pipe(
      map(changes => {
        return changes.map(c =>({ key : c.payload.key, ...c.payload.val()}))
      })
    )
  }

  delete(key : String){
    this.db.object(`imagem/${key}`).remove()
  }

  // Antigo Depreciado
    // upload(event) {
    //   this.storage.upload('gs://ccpa-floripa.appspot.com/Home/', event.target.files[0]);  
    // }
}
