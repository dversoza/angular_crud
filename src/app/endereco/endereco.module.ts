import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { EnderecoService } from './services';

import { ListarEnderecosComponent } from './listar-enderecos/listar-enderecos.component';
import { InserirEnderecosComponent } from './inserir-enderecos/inserir-enderecos.component';
import { EditarEnderecosComponent } from './editar-enderecos/editar-enderecos.component';

@NgModule({
  declarations: [
    ListarEnderecosComponent,
    InserirEnderecosComponent,
    EditarEnderecosComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [EnderecoService],
})
export class EnderecoModule {}
