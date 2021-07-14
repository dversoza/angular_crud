import { Injectable } from '@angular/core';

import { Endereco } from 'src/app/shared/models/endereco.model';

const LS_CHAVE: string = 'enderecos';

@Injectable({
  providedIn: 'root',
})
export class EnderecoService {
  constructor() {}

  listarTodos(): Endereco[] {
    const enderecos: string = localStorage[LS_CHAVE];
    return enderecos ? JSON.parse(enderecos) : [];
  }

  criar(endereco: Endereco): Endereco {
    const enderecos: Endereco[] = this.listarTodos();
    endereco.id = new Date().getTime();
    enderecos.push(endereco);
    localStorage[LS_CHAVE] = JSON.stringify(enderecos);
    return endereco;
  }

  buscarPorId(id: number): Endereco {
    const enderecos: Endereco[] = this.listarTodos();
    let foundEndereco = enderecos.find((e) => e.id === id);
    if (foundEndereco) {
      return foundEndereco;
    } else {
      throw new Error('Endereço não encontrado!');
    }
  }

  buscarPorBairro(bairro: string): Endereco[] {
    const enderecos: Endereco[] = this.listarTodos();
    let foundEndereco = enderecos.filter((e) => e.bairro === bairro);
    if (foundEndereco) {
      return foundEndereco;
    } else {
      throw new Error('Nenhum endereço encontrado para o bairro indicado!');
    }
  }

  atualizar(endereco: Endereco): void {
    const enderecos: Endereco[] = this.listarTodos();
    enderecos.forEach((obj, index, objs) => {
      if (obj.id === endereco.id) {
        objs[index] = endereco;
      }
    });
    localStorage[LS_CHAVE] = JSON.stringify(enderecos);
  }

  remover(endereco: Endereco): void {
    let enderecos: Endereco[] = this.listarTodos();
    enderecos = enderecos.filter((e) => e.id !== endereco.id);
    localStorage[LS_CHAVE] = JSON.stringify(enderecos);
  }
}
