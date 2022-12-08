import { Injectable } from "@angular/core";
import { Observable, Subject } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Cliente } from "../cliente";


const baseUrl = 'http://localhost:5000/api/clients';

@Injectable({
  providedIn: 'root'
})
export class ServicoCliente {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  get(id: string): Observable<any> {
    return this.http.get(`${ baseUrl }/${ id }`);
  }

  create(data: Cliente): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: string, data: Cliente): Observable<any> {
    return this.http.put(`${ baseUrl }/${ id }`, data);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${ baseUrl }/${ id }`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByCpf(cpf: string): Observable<any> {
    return this.http.get(`${ baseUrl }?title=${ cpf }`);
  }
}
