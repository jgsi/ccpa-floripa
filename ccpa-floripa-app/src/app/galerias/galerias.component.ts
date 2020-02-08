import { Component, OnInit } from '@angular/core';
import { ImagemService } from './imagem.service';

@Component({
  selector: 'app-galerias',
  templateUrl: './galerias.component.html',
  styleUrls: ['./galerias.component.css']
})
export class GaleriasComponent implements OnInit {

  constructor(private imagemService : ImagemService) { }

  ngOnInit() {
  }

  enviar(evento : any){
   console.log(JSON.stringify(evento))
   console.log(JSON.stringify(evento.target))
    //this.imagemService.upload(evento)
  }
}
