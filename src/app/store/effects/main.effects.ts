import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as main from '../actions/main.actions';
import { switchMap, map, tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { UserService } from '../../services/user.service';
import { balance } from '../actions/main.actions';

@Injectable({
  providedIn: 'root',
})
export class MainEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private store: Store<AppState>,
    private userService: UserService
  ) {

  }

  balance$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(main.balance),
      /** An EMPTY observable only emits completion. Replace with your own observable stream */
      switchMap(({cuenta_id}) => this.userService.getBalance(cuenta_id).pipe(
        map(({ cuenta }) => {
          return main.balanceSuccess({ cuenta });
        }),
        catchError((error) => {
          console.error(error);
          return of(main.balanceFailure({ error }));
        })
      )));
  });

  retirar$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(main.retirar),
        /** An EMPTY observable only emits completion. Replace with your own observable stream */
        switchMap(({ cuenta_id, cantidad }) => this.userService.retirar(cuenta_id, cantidad).pipe(
          map(() => {
            this.store.dispatch(balance({
              cuenta_id
            }));
            this.router.navigate(['retirar-efectivo-message']);
            return main.retirarSuccess();
          }),
          catchError((error) => {
            console.error(error);
            this.router.navigate(['sin-fondos']);
            return of(main.retirarFailure({ error }));
          })
        )));
  });

  depositar$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(main.depositar),
        /** An EMPTY observable only emits completion. Replace with your own observable stream */
      switchMap(({ cuentaEmisora, numCuenta, cantidad }) => this.userService.depositar(cuentaEmisora, numCuenta, cantidad).pipe(
        map(() => {
          this.store.dispatch(balance({
            cuenta_id: cuentaEmisora
          }));
          this.router.navigate(['transferencia-exitosa']);
          return main.depositarSuccess();
        }),
        catchError((error) => {
          console.error(error);
          this.router.navigate(['sin-fondos']);
          return of(main.retirarFailure({ error }));
        })
      )));
  });


}
