import { createReducer, on } from '@ngrx/store';
import * as auth from '../actions/auth.actions';
import { Cuenta } from '../../../models/cuenta.model';

export interface AuthState {
  cuenta: Cuenta;
  error: any;
  cargando: boolean;
};

const initialState: AuthState = {
  cuenta: null,
  error: null,
  cargando: false
};

export const reducer = createReducer(
  initialState,
  on(auth.login, (state) => ({
    ...state,
    cargando: true,
    error: null,
  })),
  on(auth.loginSuccess, (state, { cuenta }) => ({
    ...state,
    cargando: false,
    cuenta: { ...cuenta }
  })),
  on(auth.loginFailure, (state, { error }) => ({
    ...state,
    cargando: false,
    error: { ...error }
  })),
  on(auth.cerrarSesion, (state) => ({
    ...initialState
  })),
  on(auth.llenarSesion, (state, { cuenta }) => ({
    ...state,
    cuenta: { ...cuenta }
  })),


);


export function authreducer(state, action) {
  return reducer(state, action);
}
