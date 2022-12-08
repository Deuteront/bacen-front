import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class EventClienteService {
  atualizarTabela = new EventEmitter();

}
