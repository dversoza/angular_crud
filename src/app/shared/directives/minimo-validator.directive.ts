import { Directive, Input, OnInit } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[minimoValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MinimoValidatorDirective,
      multi: true,
    },
  ],
})
export class MinimoValidatorDirective implements Validator, OnInit {
  @Input('valorMinimo') valorMinimo!: string;

  constructor() {}

  ngOnInit() {}

  validate(c: FormControl) {
    // "+" transforma o valor em um número inteiro
    let v: number = +c.value;

    if (isNaN(v)) {
      return { minimo: true, requiredValue: +this.valorMinimo };
    }

    if (v < +this.valorMinimo) {
      return { minimo: true, requiredValue: +this.valorMinimo };
    }

    return null;
  }
}
