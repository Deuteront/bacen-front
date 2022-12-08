import { Component, EventEmitter, Output } from '@angular/core';
import { ServicoCliente } from "../servico-cliente/servico-cliente.service";
import { Cliente } from "../cliente";
import { EventClienteService } from "../servico-cliente/event-cliente.service";

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent {
  cliente: Cliente;

  constructor(private ServicoCliente: ServicoCliente, private EventClienteService: EventClienteService) {
    this.cliente = new Cliente();
  }

  buscarPorCpf(cpf: string) {
    console.log(cpf)
    try {
      this.ServicoCliente.get(cpf)
        .subscribe(
          data => {
            this.cliente = data;
            console.log(data);
          });
    } catch (error) {
      console.log(error)
    }
  }

  salvarAtualizar() {
    try {
      if (this.cliente.id) {
        this.ServicoCliente.create(this.cliente).subscribe(
          data => {
            this.cliente = data;
            console.log(data);
          });
      } else {
        this.ServicoCliente.update(this.cliente.id, this.cliente).subscribe(
          data => {
            this.cliente = data;
          });
      }
    } catch (error) {
      console.log(error)
    }
    this.EventClienteService.atualizarTabela.emit(true)
  }

  limpar() {
    this.cliente = new Cliente();
  }

}
