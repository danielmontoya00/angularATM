import { Cuenta } from "./cuenta.model";
import { Tarjeta } from "./tarjeta.model";
import { Banco } from './banco.model';

export class Transaccion {
  fecha: Date;
  importe: number;
  concepto: string;
  tipo: 'substraccion' | 'adicion';
  numeroReferencia: number;
  cuentaEmisora: Cuenta;
  cuentaBeneficiaria: Cuenta | Tarjeta;
}
