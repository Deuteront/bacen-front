

export class Cliente {
  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }
  constructor() {
  }

  private _id!: string;
  private _cpf!: string;
  private _nome!: string;
  private _credito!: number;
  private _debito!: number;
  get debito(): number {
    return this._debito;
  }

  set debito(value: number) {
    this._debito = value;
  }

  get credito(): number {
    return this._credito;
  }

  set credito(value: number) {
    this._credito = value;
  }

  get cpf(): string {
    return this._cpf;
  }

  set cpf(value: string) {
    this._cpf = value;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    this._nome = value;
  }
}
