import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'caixaAlta' })
export class MeuPipePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return value.toUpperCase();
  }
}
