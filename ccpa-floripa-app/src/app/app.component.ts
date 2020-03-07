import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ccpa-floripa-app';

  constructor(private authService : AuthService){  }

  getUserImg(){
    return this.authService.userData.photoURL;
  }

  usuarioLogado(){
    try{
      return this.authService.isLoggedIn ? '    '+ this.authService.userData.displayName : ''
    } catch (error){
     // console.error(error)
    }
  }
}
