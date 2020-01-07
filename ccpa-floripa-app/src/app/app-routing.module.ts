import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditProdutoComponent } from './produtos/edit-produto/edit-produto.component';
import { EditCelulaComponent } from './celulas/edit-celula/edit-celula.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListProdutoComponent } from './produtos/list-produto/list-produto.component';
import { ListCelulaComponent } from './celulas/list-celula/list-celula.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'produto/new' , component: EditProdutoComponent},
  { path: 'produto/:id' , component: EditProdutoComponent},
  { path: 'produtos' , component: ListProdutoComponent},
  { path: 'celulas' , component: ListCelulaComponent},
  { path: 'celula/new' , component: EditCelulaComponent},
  { path: 'celula/:id' , component: EditCelulaComponent},
  { path: 'home' , component: HomeComponent},
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
