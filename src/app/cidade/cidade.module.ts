import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CidadeService } from './services';

import { InserirCidadeComponent } from './inserir-cidade/inserir-cidade.component';
import { EditarCidadeComponent } from './editar-cidade/editar-cidade.component';
import { ListarCidadeComponent } from './listar-cidade/listar-cidade.component';

@NgModule({
  declarations: [
    ListarCidadeComponent,
    InserirCidadeComponent,
    EditarCidadeComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [CidadeService],
})
export class CidadeModule {}
