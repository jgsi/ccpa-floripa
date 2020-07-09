import { Injectable } from '@angular/core';
import { AngularFireStorage ,  AngularFireStorageReference, AngularFireUploadTask  } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { Imagem } from './imagem';


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

  get(key : string){
    return this.db.object(`imagem/${key}`)
  }
 
  getAll(){
    return this.db.list('imagem').snapshotChanges().pipe(
      map(changes => {
        return changes.map(c =>({ key : c.payload.key, ...c.payload.val() as {}}))
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
