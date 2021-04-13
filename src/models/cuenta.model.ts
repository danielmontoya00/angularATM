import { Banco } from "./banco.model";
import { Cliente } from "./cliente.model";

export class Cuenta {
  id: number;
  banco: Banco;
  balance: number;
  cliente: Cliente;
  numeroCuenta: number;
  digitoControl: number
}

export class CuentaAhorros extends Cuenta {
  tasaInteres: number;
}
