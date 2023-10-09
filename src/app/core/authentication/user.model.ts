export class User{
  constructor(obj: any) {
    if (!obj) return;
    this.email = obj.email;
    this.password = obj.password;
    this.cpf = obj.cpf;
    this.image = obj.image;
    this.nivel_acesso = obj.nivel_acesso;
    this.token = obj.token;
  }

  email?: string;
  password?: string;
  cpf?: string;
  image?: string;
  nivel_acesso?: number;
  token?: string;
}
