import { createAction, props } from '@ngrx/store';
import { Cuenta } from 'src/models/cuenta.model';

export const balance = createAction(
  '[Main] Balance',
  props<{ cuenta_id: number }>()
);

export const balanceSuccess = createAction(
  '[Main] Balance Success',
  props<{ cuenta: Cuenta }>()
);

export const balanceFailure = createAction(
  '[Main] Balance Failure',
  props<{ error: any }>()
);

export const retirar = createAction(
  '[Main] Retirar',
  props<{ cuenta_id: number, cantidad: number }>()
);

export const retirarSuccess = createAction(
  '[Main] Retirar Success'
);

export const retirarFailure = createAction(
  '[Main] Retirar Failure',
  props<{ error: any }>()
);

export const depositar = createAction(
  '[Main] Depositar',
  props<{ cuentaEmisora: number, numCuenta: string, cantidad: number }>()
);

export const depositarSuccess = createAction(
  '[Main] Depositar Success'
);

export const depositarFailure = createAction(
  '[Main] Depositar Failure',
  props<{ error: any }>()
);
