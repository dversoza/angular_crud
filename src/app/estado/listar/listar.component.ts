import { Component, OnInit } from '@angular/core';

import { EstadoService } from '../services';
import { Estado } from 'src/app/shared/models/estado.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalEstadoComponent } from '../modal-estado/modal-estado.component';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
})
export class ListarComponent implements OnInit {
  estados!: Estado[];
  constructor(
    private estadoService: EstadoService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.estados = this.listarTodos();
  }

  listarTodos(): Estado[] {
    return this.estadoService.listarTodos();
  }

  remover($event: any, estado: Estado): void {
    $event.preventDefault();
    if (confirm(`Tem certeza que deseja excluir ${estado.nome}?`)) {
      this.estadoService.remover(estado);
      this.estados = this.listarTodos();
    }
  }

  abrirModalEstado(estado: Estado): void {
    const modalRef = this.modalService.open(ModalEstadoComponent);
    modalRef.componentInstance.estado = estado;
  }
}
