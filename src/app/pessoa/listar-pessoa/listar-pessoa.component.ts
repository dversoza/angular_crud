import { Component, OnInit } from '@angular/core';

import { PessoaService } from '../services';
import { Pessoa } from 'src/app/shared/models';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalPessoaComponent } from '../modal-pessoa';

@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.component.html',
  styleUrls: ['./listar-pessoa.component.css'],
})
export class ListarPessoaComponent implements OnInit {
  pessoas!: Pessoa[];

  constructor(
    private pessoaService: PessoaService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.pessoas = this.listarTodos();
  }

  listarTodos(): Pessoa[] {
    return this.pessoaService.listarTodos();
  }

  excluir($event: any, pessoa: Pessoa): void {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover ${pessoa.nome}?`)) {
      this.pessoaService.remover(pessoa);
      this.pessoas = this.listarTodos();
    }
  }

  abrirModalPessoa(pessoa: Pessoa): void {
    const modalRef = this.modalService.open(ModalPessoaComponent);
    modalRef.componentInstance.pessoa = pessoa;
  }
}
