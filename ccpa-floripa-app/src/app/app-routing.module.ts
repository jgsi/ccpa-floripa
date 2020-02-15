import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EditProdutoComponent } from './produtos/edit-produto/edit-produto.component';
import { EditCelulaComponent } from './celulas/edit-celula/edit-celula.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListProdutoComponent } from './produtos/list-produto/list-produto.component';
import { ListCelulaComponent } from './celulas/list-celula/list-celula.component';
import { HomeComponent } from './home/home.component';
import { ListMembroComponent } from './membros/list-membro/list-membro.component';
import { EditMembroComponent } from './membros/edit-membro/edit-membro.component';
import { ListUsuarioComponent } from './usuarios/list-usuario/list-usuario.component';
import { EditUsuarioComponent } from './usuarios/edit-usuario/edit-usuario.component';
import { TrocaSenhaComponent } from './usuarios/troca-senha/troca-senha.component';
import { MapComponent } from './home/map/map.component';
import { CarrosselComponent } from './home/carrossel/carrossel.component';
import { MembrosComponent } from './membros/membros.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  { path: 'produto/new' , component: EditProdutoComponent, canActivate:[AuthGuard]},
  { path: 'produto/:id' , component: EditProdutoComponent, canActivate:[AuthGuard]},
  { path: 'produtos' , component: ListProdutoComponent, canActivate:[AuthGuard]},
  { path: 'celulas' , component: ListCelulaComponent, canActivate:[AuthGuard]},
  { path: 'celula/new' , component: EditCelulaComponent, canActivate:[AuthGuard]},
  { path: 'celula/:id' , component: EditCelulaComponent, canActivate:[AuthGuard]},
  { path: 'home' , component: HomeComponent},
  { path: 'membros' , component: ListMembroComponent, canActivate:[AuthGuard]},
  { path: 'membro/new' , component: EditMembroComponent, canActivate:[AuthGuard]},
  { path: 'membro/:id' , component: EditMembroComponent, canActivate:[AuthGuard]},
  { path: '' , 
  redirectTo: 'home',
  pathMatch: 'full'},
  { path: '**' , component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
