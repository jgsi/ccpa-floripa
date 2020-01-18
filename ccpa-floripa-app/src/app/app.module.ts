import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FirebaseUIModule } from 'firebaseui-angular';
import * as firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
 
import { AngularFireModule } from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';

import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListUsuarioComponent } from './usuarios/list-usuario/list-usuario.component';
import { EditUsuarioComponent } from './usuarios/edit-usuario/edit-usuario.component';
import { TrocaSenhaComponent } from './usuarios/troca-senha/troca-senha.component';
import { EditCelulaComponent } from './celulas/edit-celula/edit-celula.component';
import { ListCelulaComponent } from './celulas/list-celula/list-celula.component';
import { EditProdutoComponent } from './produtos/edit-produto/edit-produto.component';
import { ListProdutoComponent } from './produtos/list-produto/list-produto.component';

import { CalendarioComponent } from './calendarios/calendario/calendario.component';

import { FullCalendarModule } from '@fullcalendar/angular';
import { EventoComponent } from './calendarios/evento/evento.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './home/map/map.component';
import { CarrosselComponent } from './home/carrossel/carrossel.component';
import { MembrosComponent } from './membros/membros.component';
import { EditMembroComponent } from './membros/edit-membro/edit-membro.component';
import { ListMembroComponent } from './membros/list-membro/list-membro.component';

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    {
      scopes: [
        'public_profile',
        'email',
        'user_likes',
        'user_friends'
      ],
      customParameters: {
        'auth_type': 'reauthenticate'
      },
      provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
    },
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    {
      requireDisplayName: false,
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
    },
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ],
  tosUrl: '<your-tos-link>',
  privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
  credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM
};

@NgModule({
  declarations: [
    AppComponent,
    ListUsuarioComponent,
    EditUsuarioComponent,
    TrocaSenhaComponent,
    EditCelulaComponent,
    ListCelulaComponent,
    CalendarioComponent,
    EventoComponent,
    ListProdutoComponent,
    EditProdutoComponent,
    PageNotFoundComponent,
    HomeComponent,
    MapComponent,
    CarrosselComponent,
    MembrosComponent,
    EditMembroComponent,
    ListMembroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    FullCalendarModule,
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
