import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ImagemService } from 'src/app/galerias/imagem.service';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.css']
})
export class CarrosselComponent implements OnInit {

  imagens : Observable<any>

  constructor(private imagemService : ImagemService) { }

  ngOnInit() {
    this.imagens = this.imagemService.getAll()
  }

}
