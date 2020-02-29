import { Component, OnInit } from '@angular/core';
import { ImagemService } from './imagem.service';
import { AngularFireStorage , AngularFireStorageReference , AngularFireUploadTask  } from  "@angular/fire/storage";
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { Imagem } from './imagem';
//import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-galerias',
  templateUrl: './galerias.component.html',
  styleUrls: ['./galerias.component.css']
})
export class GaleriasComponent implements OnInit {

  imagens : Observable<any>;
  
  constructor(private imageService : ImagemService) { }

  ngOnInit() {
    // this.imagens = this.imageService.getAll()
  }

  enviar(evento){
    this.imageService.upload(evento)
  }

  progresso(){
    this.imageService.getUploadProgress()
  }

}
