import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared';

import { AppRoutingModule } from './app-routing.module';
import { PessoaModule } from './pessoa';
import { EnderecoModule } from './endereco';
import { CidadeModule } from './cidade';
import { EstadoModule } from './estado';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PessoaModule,
    EnderecoModule,
    CidadeModule,
    EstadoModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
