import { Component }        from '@angular/core';
import { Router,
         NavigationExtras } from '@angular/router';
import { AuthService }      from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  message: string;

  logado: boolean = false;

  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }

  usuarioLogado(){
    try{
      if(this.authService.isLoggedIn){
        var user = this.authService.isLoggedIn ? '    '+ this.authService.userData.displayName : ''
        this.logado = true
      }else{
        this.logado = false
      }
    } catch (error){
      this.logado = false
      // console.error(error)
    }
  }

  setMessage() {
    this.message = 'Entrou ' + (this.authService.isLoggedIn ? 'como ' +this.authService.userData.displayName : 'out') ;
    this.usuarioLogado()
  }

  login() {
    this.message = 'Fazendo login ...';
  }

  getUserImg(){
    if(this.logado){
      return this.authService.userData.photoURL;
    }
  }

  logout() {
    this.authService.SignOut();
    this.logado = false
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/