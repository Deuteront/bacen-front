import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroClienteComponent } from './cliente/cadastro-cliente/cadastro-cliente.component';
import { TabelaClienteComponent } from './cliente/tabela-cliente/tabela-cliente.component';
import { HttpClientModule } from "@angular/common/http";
import { HomeClienteComponent } from './cliente/home-cliente/home-cliente.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CadastroClienteComponent,
    TabelaClienteComponent,
    HomeClienteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
