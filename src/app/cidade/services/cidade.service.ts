import { Injectable } from '@angular/core';

import { Cidade } from 'src/app/shared/models/cidade.model';

const LS_CHAVE: string = 'cidades';

@Injectable({
  providedIn: 'root',
})
export class CidadeService {
  constructor() {}

  listarTodas(): Cidade[] {
    const cidades: string = localStorage[LS_CHAVE];
    return cidades ? JSON.parse(cidades) : [];
  }

  criar(cidade: Cidade): Cidade {
    const cidades: Cidade[] = this.listarTodas();
    cidade.id = new Date().getTime();
    cidades.push(cidade);
    localStorage[LS_CHAVE] = JSON.stringify(cidades);
    return cidade;
  }

  buscarPorId(id: number): Cidade {
    const cidades: Cidade[] = this.listarTodas();
    let foundCidade: Cidade | undefined = cidades.find((c) => c.id === id);
    if (foundCidade) {
      return foundCidade;
    } else {
      throw new Error('Nenhuma cidade encontrada para o id indicado.');
    }
  }

  atualizar(cidade: Cidade): void {
    const cidades: Cidade[] = this.listarTodas();
    cidades.forEach((obj, index, objs) => {
      if (obj.id === cidade.id) {
        objs[index] = cidade;
      }
    });
    localStorage[LS_CHAVE] = JSON.stringify(cidades);
  }

  remover(cidade: Cidade): void {
    let cidades: Cidade[] = this.listarTodas();
    cidades = cidades.filter((c) => c.id !== cidade.id);
    localStorage[LS_CHAVE] = JSON.stringify(cidades);
  }
}
