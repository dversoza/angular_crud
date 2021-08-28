import { Directive, ElementRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: 'input[numerico]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: NumericoDirective,
      multi: true,
    },
  ],
})
export class NumericoDirective implements ControlValueAccessor {
  onChange: any;
  onTouched: any;

  constructor(private el: ElementRef) {}

  @HostListener('keyup', ['$event'])
  onKeyUp($event: any) {
    let valor = $event.target.value;

    // REGEX que verifica se o valor é um número, removendo tudo que não for
    valor = valor.replace(/[\D]/g, '');

    $event.target.value = valor;
    // Atualiza o model
    this.onChange(valor);
  }

  // Os três métodos abaixo são padrão e necessários para implementar as
  // modificações na interface
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  writeValue(value: any): void {
    this.el.nativeElement.value = value ? value : '';
  }
}
