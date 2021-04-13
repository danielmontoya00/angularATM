import { ActionReducerMap } from '@ngrx/store';
import { AuthState, authreducer } from './reducer/auth.reducer';
import { MainState, mainreducer } from './reducer/main.reducer';

export interface AppState {
  authReducer: AuthState;
  mainReducer: MainState;
}

export const appReducers: ActionReducerMap<AppState> = {
  authReducer: authreducer,
  mainReducer: mainreducer,
};
