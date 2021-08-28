import { NgModule } from '@angular/core';

// Directives
import { MinimoValidatorDirective, NumericoDirective } from './directives';

// Pipes
import { MeuPipePipe } from './pipes';

@NgModule({
  declarations: [MinimoValidatorDirective, NumericoDirective, MeuPipePipe],
  exports: [MinimoValidatorDirective, NumericoDirective, MeuPipePipe],
})
export class SharedModule {}
