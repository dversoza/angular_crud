import { Component, OnInit } from '@angular/core';

import { EnderecoService } from '../services';
import { Endereco } from 'src/app/shared/models/endereco.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalEnderecoComponent } from '../modal-endereco';

@Component({
  selector: 'app-listar-enderecos',
  templateUrl: './listar-enderecos.component.html',
  styleUrls: ['./listar-enderecos.component.css'],
})
export class ListarEnderecosComponent implements OnInit {
  enderecos!: Endereco[];

  constructor(
    private enderecoService: EnderecoService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.enderecos = this.listarTodos();
  }

  listarTodos(): Endereco[] {
    return this.enderecoService.listarTodos();
  }

  excluir($event: any, endereco: Endereco): void {
    $event.preventDefault();
    if (confirm('Deseja realmente exluir este endereço?')) {
      this.enderecoService.remover(endereco);
      this.enderecos = this.listarTodos();
    }
  }

  abrirModalEndereco(endereco: Endereco): void {
    const modalRef = this.modalService.open(ModalEnderecoComponent);
    modalRef.componentInstance.endereco = endereco;
  }
}
