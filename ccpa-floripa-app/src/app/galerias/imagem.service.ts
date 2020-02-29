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
  ref : AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  imagem : Imagem

  constructor(
    private afStorage: AngularFireStorage
  , private db : AngularFireDatabase
  ) { }

    getAll() {
      // return this.afStorage.ref('/3i11k94kqv8').getDownloadURL();
      //console.log(JSON.stringify(this.ref.child('files/uid')))
      //return this.ref.child('files/uid');
   
    }

    upload(evento) {
      const file = evento.target.files[0]
      const id = Math.random().toString(32).substring(2)
      this.ref = this.afStorage.ref(id);
      this.task = this.ref.put(file)

      this.imagem = new Imagem()
      this.imagem.nome = file.name
      this.imagem.id = id
      this.imagem.tamanho = file.size
      this.db.list('imagem').push(this.imagem)
      .then((result : any ) =>{
        console.log(result.key);
      })

    }

    getUploadProgress(){
      return this.uploadProgress
    }



}
