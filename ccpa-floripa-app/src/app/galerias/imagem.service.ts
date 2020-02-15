import { Injectable } from '@angular/core';
import { AngularFireStorage ,  AngularFireStorageReference, AngularFireUploadTask  } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})

export class ImagemService {
  ref : AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;

  constructor(private afStorage: AngularFireStorage, private afStore: AngularFirestore ) { }

    getAll() {
      // return this.afStorage.ref('/3i11k94kqv8').getDownloadURL();
      //console.log(JSON.stringify(this.ref.child('files/uid')))
      //return this.ref.child('files/uid');
   
    }

    upload(evento) {
      const id = Math.random().toString(32).substring(2)
      // const id = evento.target.files[0].name
      // this.ref = this.afStorage.ref('home/'+id);
      // this.task = this.ref.put(evento.target.files[0])
      const file = evento.target.files[0]
      // this.uploadProgress = this.task.snapshotChanges()
          // .pipe(map(s => (s.bytesTransferred / s.totalBytes ) * 100));

      // Salvar o id do arquivo gerado randomicamente para listar depois
      const imgRef: AngularFirestoreDocument<any> = this.afStore.doc(`imagens/${id}`)
      //TO:DO fazer funcionar essa bagaça
      imgRef.set({"id" : id,   });

    }

    getUploadProgress(){
      return this.uploadProgress
    }



}
