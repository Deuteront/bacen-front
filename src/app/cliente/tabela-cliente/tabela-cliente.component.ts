import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { ServicoCliente } from "../servico-cliente/servico-cliente.service";
import { Cliente } from "../cliente";
import { EventClienteService } from "../servico-cliente/event-cliente.service";

@Component({
  selector: 'app-tabela-cliente',
  templateUrl: './tabela-cliente.component.html',
  styleUrls: ['./tabela-cliente.component.css']
})
export class TabelaClienteComponent implements OnInit {
  clientes: Cliente[] = [];
  @Input() recarregarTabela = false;


  clientesSelecionados: any = {};

  constructor(private ServicoCliente: ServicoCliente, private EventClienteService: EventClienteService) {
  }

  ngOnInit(): void {
    this.EventClienteService.atualizarTabela.subscribe(response => this.carregarClientes())
    this.EventClienteService.atualizarTabela.emit();
  }


  carregarClientes(): void {
    try {
      this.ServicoCliente.getAll()
        .subscribe(
          data => {
            this.clientes = data;
            console.log(data);
          });

    } catch (error) {
      console.log(error)
    }
  }

  selecionarCliente(id: string) {
    if (this.clientesSelecionados[id]) {
      delete this.clientesSelecionados[id];
    } else {
      this.clientesSelecionados[id] = true;

    }

  }

  excluirSelecionados() {
    for (const cpfCliente of Object.keys(this.clientesSelecionados)) {
      try {
        this.ServicoCliente.delete(cpfCliente).subscribe(
          data => {
          })
      } catch (error) {
        console.log(error);
      }
    }
    this.EventClienteService.atualizarTabela.emit();
  }

}
