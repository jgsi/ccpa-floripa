import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditProdutoComponent } from './produtos/edit-produto/edit-produto.component';
import { EditCelulaComponent } from './celulas/edit-celula/edit-celula.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'produto/edit' , component: EditProdutoComponent},
  { path: 'celula/edit' , component: EditCelulaComponent},
  { path: '' , 
  redirectTo: 'celula/list',
  pathMatch: 'full'},
  { path: '**' , component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
