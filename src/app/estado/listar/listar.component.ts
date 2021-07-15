import { Component, OnInit } from '@angular/core';

import { EstadoService } from '../services';
import { Estado } from 'src/app/shared/models/estado.model';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
})
export class ListarComponent implements OnInit {
  estados!: Estado[];
  constructor(private estadoService: EstadoService) {}

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
}
