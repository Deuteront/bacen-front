class AccountRequest {
   initialBalance !: number;
   password !: string;
   creditCardLimit !: number;

}

export class Cliente {
  constructor() {
  }

  private name!: string;
  private email!: string;
  private address!: number;
  private account: AccountRequest = { initialBalance: 0, password: '', creditCardLimit: 0};
  get Account(): AccountRequest {
    return this.account;
  }

  set Account(value: AccountRequest) {
    this.account = value;
  }

  get Address(): number {
    return this.address;
  }

  set Address(value: number) {
    this.address = value;
  }

  get Name(): string {
    return this.name;
  }

  set Name(value: string) {
    this.name = value;
  }

  get Email(): string {
    return this.email;
  }

  set Email(value: string) {
    this.email = value;
  }
}
