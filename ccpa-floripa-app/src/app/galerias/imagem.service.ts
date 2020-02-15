import { Injectable } from '@angular/core';
import { AngularFireStorage ,  AngularFireStorageReference  } from '@angular/fire/storage';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ImagemService {
  
  constructor(private storage: AngularFireStorage, private ref : AngularFireStorageReference) { }

    getAll() {
      //console.log(JSON.stringify(this.ref.child('files/uid')))
      //return this.ref.child('files/uid');
   
    }

    upload(event) {
      this.storage.upload('gs://ccpa-floripa.appspot.com/Home/', event.target.files[0]);  
    }



}
