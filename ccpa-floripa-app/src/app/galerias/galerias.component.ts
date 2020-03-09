import { Component, OnInit } from '@angular/core';
import { ImagemService } from './imagem.service';
import { AudiosService } from './audios.service';
import { AngularFireStorage , AngularFireStorageReference , AngularFireUploadTask  } from  "@angular/fire/storage";
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { Imagem } from './imagem';
import { Audios } from './audios';
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
  audio: Audios

  imagens : Observable<any>;
  audios: Observable<any>;
  
  url: string
  key: string
  nome: string

  constructor(private imageService : ImagemService,private audioService : AudiosService, private  afStorage: AngularFireStorage) { }

  ngOnInit() {
    this.imagens = this.imageService.getAll()
    this.audios = this.audioService.getAll()
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


  enviarImg(evento){

    var file = evento.target.files[0]
    this.imagem = new Imagem()
    this.imagem.nome = file.name
    this.imagem.tamanho = file.size
    const id = file.name
    this.ref = this.afStorage.ref('imagens/'+id);
    this.task = this.ref.put(evento.target.files[0])
    this.task.then(a => {
      this.ref.getDownloadURL().subscribe((url) => {
        this.imagem.url = url
        this.imageService.insert(this.imagem)
      })  
    })
  }

  enviarAud(evento){

    var file = evento.target.files[0]
    this.audio = new Audios()
    this.audio.nome = file.name
    this.audio.tamanho = file.size
    const id = file.name
    this.ref = this.afStorage.ref('audios/'+id);
    this.task = this.ref.put(evento.target.files[0])
    this.task.then(a => {
      this.ref.getDownloadURL().subscribe((url) => {
        this.audio.url = url
        this.audioService.insert(this.audio)
      })  
    })
  }

  play(url: string){
    this.url =  url
  }

  deleteImg(){
    this.imageService.delete(this.key)
    this.afStorage.ref(this.nome).delete()
    console.log(this.nome)
  }
  deleteAud(){
    this.audioService.delete(this.key)
    this.afStorage.ref(this.nome).delete()
    console.log(this.nome)
  }

  comfirm(key : string, nome: string){
    this.key = key
    this.nome = nome
  }

}
