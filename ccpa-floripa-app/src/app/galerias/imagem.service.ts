import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';


@Injectable({
  providedIn: 'root'
})

export class ImagemService {

  constructor(private storage: AngularFireStorage) { }
    upload(event) {
      this.storage.upload('gs://ccpa-floripa.appspot.com/Home/', event.target.files[0]);  
    }

}
