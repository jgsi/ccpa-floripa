import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Auth service
import { AuthService } from "./auth/auth.service";

import { AppRoutingModule } from './app-routing.module';
import { AuthModule }              from './auth/auth.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from "@angular/fire/storage";

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

import { registerLocaleData } from '@angular/common';
import localeBr  from '@angular/common/locales/pt';

registerLocaleData(localeBr);

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
    AuthModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    FullCalendarModule,
    AngularFireAuthModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
