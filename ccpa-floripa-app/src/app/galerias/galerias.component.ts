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
 
  imagens : Observable<any>;
  
  constructor(private imageService : ImagemService, private  afStorage: AngularFireStorage) { }

  ngOnInit() {
    this.imagens = this.imageService.getAll()
    // this.imagens.subscribe(imgs => { 
    //   imgs.forEach( imagem => {
    //     // console.log(imagem.nome)        
    //     this.afStorage.ref('/'+imagem.nome).getDownloadURL().subscribe( (url) => {
    //       imagem.bytes = url
    //       // console.log(url)
    //       // console.log(JSON.stringify(imagem))
    //     })
    //   })
    // })
    
    // this.imageService.getAll()
    //console.log(this.imageService.getAll())
  }


  enviar(evento){

    var file = evento.target.files[0]
    this.imagem = new Imagem()
    this.imagem.nome = file.name
    this.imagem.tamanho = file.size
    const id = file.name
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(evento.target.files[0])
    this.task.then(a => {
      this.ref.getDownloadURL().subscribe((url) => {
        this.imagem.url = url
        this.imageService.insert(this.imagem)
      })  
    })
  }

  delete(key : string, nome: string){
    this.imageService.delete(key)
    this.afStorage.ref(nome).delete()
    console.log(nome)
  }

}
