import { Cliente } from "./cliente.model";
import { Cuenta } from './cuenta.model';

export class Tarjeta {
  numeroTarjeta: number;
  mesExpiracion: number;
  anioExpiracion: number;
  ccv: number;
  cuenta: Cuenta;
}
