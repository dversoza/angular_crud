import { Injectable } from '@angular/core';
import { Estado } from 'src/app/shared/models/estado.model';

const LS_CHAVE: string = 'estados';

@Injectable({
  providedIn: 'root',
})
export class EstadoService {
  constructor() {}

  listarTodos(): Estado[] {
    const estados: string = localStorage[LS_CHAVE];
    return estados ? JSON.parse(estados) : [];
  }

  buscarPorId(id: number): Estado {
    const estados: Estado[] = this.listarTodos();
    const foundEstado = estados.find((e) => e.id === id);
    if (foundEstado) {
      return foundEstado;
    } else throw new Error('Nenhum estado encontrado para o id especificado');
  }

  criar(estado: Estado): void {
    let estados: Estado[] = this.listarTodos();
    estado.id = new Date().getTime();
    estados.push(estado);
    localStorage[LS_CHAVE] = JSON.stringify(estados);
  }

  remover(estado: Estado): void {
    let estados: Estado[] = this.listarTodos();
    estados = estados.filter((e) => e.id !== estado.id);
    localStorage[LS_CHAVE] = JSON.stringify(estados);
  }

  atualizar(estado: Estado): void {
    let estados: Estado[] = this.listarTodos();

    estados.forEach((obj, index, objs) => {
      if (obj.id === estado.id) {
        objs[index] = estado;
      }
    });

    localStorage[LS_CHAVE] = JSON.stringify(estados);
  }
}
