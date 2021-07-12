import { Injectable } from '@angular/core';

import { Pessoa } from 'src/app/shared/models/pessoa.model';

const LS_CHAVE: string = 'pessoas';

@Injectable({
  providedIn: 'root',
})
export class PessoaService {
  constructor() {}

  listarTodos(): Pessoa[] {
    const pessoas = localStorage[LS_CHAVE];
    return pessoas ? JSON.parse(pessoas) : [];
  }

  inserir(pessoa: Pessoa): void {
    // Obtém lista completa de pessoas
    const pessoas = this.listarTodos();

    // Cria um ID único a partir da data/hora
    pessoa.id = new Date().getTime();

    // Adiciona a nova pessoa no final da lista
    pessoas.push(pessoa);

    // Converte a lista em JSON e armazena no localStorage
    localStorage[LS_CHAVE] = JSON.stringify(pessoas);
  }

  buscarPorId(id: number): Pessoa | undefined {
    // Obtém lista completa de pessoas
    const pessoas: Pessoa[] = this.listarTodos();

    return pessoas.find((pessoa: Pessoa) => pessoa.id === id);
  }

  buscarPorNome(nome: string): Pessoa[] | undefined {
    const pessoas: Pessoa[] = this.listarTodos();
    return pessoas.filter((p: Pessoa) => p.nome === nome);
  }

  buscarPorIdade(idade: number): Pessoa[] | undefined {
    const pessoas: Pessoa[] = this.listarTodos();
    return pessoas.filter((p: Pessoa) => p.idade === idade);
  }

  atualizar(pessoa: Pessoa): void {
    const pessoas: Pessoa[] = this.listarTodos();
    pessoas.forEach((obj, index, objs) => {
      if (pessoa.id === obj.id) {
        objs[index] = pessoa;
      }
    });
    localStorage[LS_CHAVE] = JSON.stringify(pessoas);
  }

  remover(pessoa: Pessoa): void {
    let pessoas: Pessoa[] = this.listarTodos();

    pessoas = pessoas.filter((p: Pessoa) => p.id !== pessoa.id);

    localStorage[LS_CHAVE] = JSON.stringify(pessoas);
  }
}
