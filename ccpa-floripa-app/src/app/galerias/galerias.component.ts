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
  ref : AngularFireStorageReference
  task: AngularFireUploadTask
  imagem: Imagem
 // imagens : Observable<any>;
  
  constructor(private afStorage: AngularFireStorage , private imageService : ImagemService) { }

  ngOnInit() {
    //this.imagens = this.imageService.getAll()
    // this.imageService.getAll()
    //console.log(this.imageService.getAll())
  }

  enviar(evento){

    var file = evento.target.files[0]
    this.imagem = new Imagem()
    this.imagem.nome = file.name
    this.imagem.tamnho = file.size
    this.imageService.insert(this.imagem)
    const id = file.name
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(evento.target.files[0])
  }

}
