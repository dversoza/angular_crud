import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { EnderecoService } from './services';

import { ListarEnderecosComponent } from './listar-enderecos/listar-enderecos.component';
import { InserirEnderecosComponent } from './inserir-enderecos/inserir-enderecos.component';
import { EditarEnderecosComponent } from './editar-enderecos/editar-enderecos.component';
import { SharedModule } from '../shared';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { ModalEnderecoComponent } from './modal-endereco/modal-endereco.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    ListarEnderecosComponent,
    InserirEnderecosComponent,
    EditarEnderecosComponent,
    ModalEnderecoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [EnderecoService],
})
export class EnderecoModule {}
