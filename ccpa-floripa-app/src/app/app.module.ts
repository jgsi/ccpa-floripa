import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { EditComponent } from './produto/edit/edit.component';
import { ListComponent } from './produto/list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListUsuarioComponent } from './usuarios/list-usuario/list-usuario.component';
import { EditUsuarioComponent } from './usuarios/edit-usuario/edit-usuario.component';
import { TrocaSenhaComponent } from './usuarios/troca-senha/troca-senha.component';
import { EditCelulaComponent } from './celulas/edit-celula/edit-celula.component';
import { ListCelulaComponent } from './celulas/list-celula/list-celula.component';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    ListComponent,
    ListUsuarioComponent,
    EditUsuarioComponent,
    TrocaSenhaComponent,
    EditCelulaComponent,
    ListCelulaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
