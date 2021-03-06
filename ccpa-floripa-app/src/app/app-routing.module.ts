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
import { GaleriasComponent } from './galerias/galerias.component';
import { ListLancamentosComponent } from './lancamentos/list-lancamentos/list-lancamentos.component';
import { EditLancamentoComponent } from './lancamentos/edit-lancamento/edit-lancamento.component';
import { DetalheMembroComponent } from './membros/detalhe-membro/detalhe-membro.component';
import { EscalasComponent } from './escalas/escalas.component';
import { ListDepartamentoComponent } from './departamentos/list-departamento/list-departamento.component';
import { EditDepartamentoComponent } from './departamentos/edit-departamento/edit-departamento.component';
import { EditEscalaComponent } from './escalas/edit-escala/edit-escala.component';


const routes: Routes = [
  { path: 'produto/new' , component: EditProdutoComponent, canActivate:[AuthGuard]},
  { path: 'produto/:id' , component: EditProdutoComponent, canActivate:[AuthGuard]},
  { path: 'produtos' , component: ListProdutoComponent, canActivate:[AuthGuard]},
  { path: 'celulas' , component: ListCelulaComponent, canActivate:[AuthGuard]},
  { path: 'celula/new' , component: EditCelulaComponent, canActivate:[AuthGuard]},
  { path: 'celula/:id' , component: EditCelulaComponent, canActivate:[AuthGuard]},
  { path: 'home' , component: HomeComponent},
  { path: 'lancamentos' , component: ListLancamentosComponent, canActivate:[AuthGuard]},
  { path: 'lancamento/new' , component: EditLancamentoComponent, canActivate:[AuthGuard]},
  { path: 'lancamento/:tipo' , component: EditLancamentoComponent, canActivate:[AuthGuard]},
  { path: 'membros' , component: ListMembroComponent, canActivate:[AuthGuard]},
  { path: 'membro/new' , component: EditMembroComponent, canActivate:[AuthGuard]},
  { path: 'membro/detail' , component: DetalheMembroComponent, canActivate:[AuthGuard]},
  { path: 'membro/:id' , component: EditMembroComponent, canActivate:[AuthGuard]},
  { path: 'galeria' , component: GaleriasComponent, canActivate:[AuthGuard]},
  { path: 'escalas' , component: EscalasComponent},
  { path: 'escalas/new' , component: EditEscalaComponent},
  { path: 'escalas/:id' , component: EditEscalaComponent},
  { path: 'departamentos' , component: ListDepartamentoComponent},
  { path: 'departamentos/new' , component: EditDepartamentoComponent, canActivate:[AuthGuard]},
  { path: 'departamentos/:id' , component: EditDepartamentoComponent, canActivate:[AuthGuard]},
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
