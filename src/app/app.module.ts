import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { PessoaModule } from './pessoa';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PessoaModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
