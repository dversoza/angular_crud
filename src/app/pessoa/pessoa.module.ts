import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared';
import { PessoaService } from './services/pessoa.service';

import { ListarPessoaComponent } from './listar-pessoa';
import { InserirPessoaComponent } from './inserir-pessoa';
import { EditarPessoaComponent } from './editar-pessoa';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { ModalPessoaComponent } from './modal-pessoa/modal-pessoa.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    ListarPessoaComponent,
    InserirPessoaComponent,
    EditarPessoaComponent,
    ModalPessoaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [PessoaService],
})
export class PessoaModule {}
