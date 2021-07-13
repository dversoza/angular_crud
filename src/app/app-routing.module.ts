import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarEnderecosComponent } from './endereco/editar-enderecos';
import { InserirEnderecosComponent } from './endereco/inserir-enderecos';
import { ListarEnderecosComponent } from './endereco/listar-enderecos';
import { EditarPessoaComponent } from './pessoa/editar-pessoa';
import { InserirPessoaComponent } from './pessoa/inserir-pessoa';
import { ListarPessoaComponent } from './pessoa/listar-pessoa';

const routes: Routes = [
  { path: '', redirectTo: 'pessoas/listar', pathMatch: 'full' },
  { path: 'pessoas', redirectTo: 'pessoas/listar' },
  { path: 'pessoas/listar', component: ListarPessoaComponent },
  { path: 'pessoas/novo', component: InserirPessoaComponent },
  { path: 'pessoas/editar/:id', component: EditarPessoaComponent },
  { path: 'pessoas/excluir/:id', component: ListarPessoaComponent },
  { path: 'enderecos', redirectTo: 'enderecos/listar' },
  { path: 'enderecos/listar', component: ListarEnderecosComponent },
  { path: 'enderecos/novo', component: InserirEnderecosComponent },
  { path: 'enderecos/editar/:id', component: EditarEnderecosComponent },
  { path: 'enderecos/excluir/:id', component: ListarEnderecosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
