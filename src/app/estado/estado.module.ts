import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InserirComponent } from './inserir/inserir.component';
import { ListarComponent } from './listar/listar.component';
import { EditarComponent } from './editar/editar.component';
import { EstadoService } from './services';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModalEstadoComponent } from './modal-estado/modal-estado.component';

@NgModule({
  declarations: [InserirComponent, ListarComponent, EditarComponent, ModalEstadoComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [EstadoService],
})
export class EstadoModule {}
