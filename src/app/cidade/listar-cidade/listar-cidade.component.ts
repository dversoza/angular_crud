import { Component, OnInit } from '@angular/core';

import { CidadeService } from '../services';
import { Cidade } from 'src/app/shared/models/cidade.model';

@Component({
  selector: 'app-listar-cidade',
  templateUrl: './listar-cidade.component.html',
  styleUrls: ['./listar-cidade.component.css'],
})
export class ListarCidadeComponent implements OnInit {
  cidades!: Cidade[];

  constructor(private cidadeService: CidadeService) {}

  ngOnInit(): void {
    this.cidades = this.listarTodas();
  }

  listarTodas() {
    return this.cidadeService.listarTodas();
  }

  remover($event: any, cidade: Cidade) {
    $event.preventDefault();
    if (confirm(`Você deseja excluir ${cidade.nome} definitivamente?`)) {
      this.cidadeService.remover(cidade);
      this.cidades = this.listarTodas();
    }
  }
}
