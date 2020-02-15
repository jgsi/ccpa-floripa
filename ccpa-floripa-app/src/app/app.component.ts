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

  usuarioLogado(){
    return this.authService.isLoggedIn ? 'Logado como: '+ this.authService.userData.displayName : ''
  }
}
