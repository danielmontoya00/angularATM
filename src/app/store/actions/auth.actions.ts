import { createAction, props } from '@ngrx/store';
import { Cuenta } from '../../../models/cuenta.model';

export const login = createAction(
  '[Auth] Login',
  props<{ numTarjeta: string, nip: string }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ cuenta: Cuenta, token: string }>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: any }>()
);

export const cerrarSesion = createAction(
  '[Auth] Cerrar Sesion',
);

export const llenarSesion = createAction(
  '[Auth] Llenar Sesion',
  props<{
    cuenta: Cuenta
  }>()
);
