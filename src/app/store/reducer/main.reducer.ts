import { createReducer, on } from '@ngrx/store';
import * as main from '../actions/main.actions';
import { Cuenta } from '../../../models/cuenta.model';

export interface MainState {
  cuenta: Cuenta;
  error: any;
  cargando: boolean;
};

const initialState: MainState = {
  cuenta: null,
  error: null,
  cargando: false
};

export const reducer = createReducer(
  initialState,
  on(main.balance, (state) => ({
    ...state,
    cargando: true,
    error: null,
  })),
  on(main.balanceSuccess, (state, { cuenta }) => ({
    ...state,
    cargando: false,
    cuenta: { ...cuenta }
  })),
  on(main.balanceFailure, (state, { error }) => ({
    ...state,
    cargando: false,
    error: { ...error }
  }))
);


export function mainreducer(state, action) {
  return reducer(state, action);
}
