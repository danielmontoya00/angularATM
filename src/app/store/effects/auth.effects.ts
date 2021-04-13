import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as auth from '../actions/auth.actions';
import { switchMap, map, tap, catchError } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: "root",
})
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private AuthService: AuthService,
    private router: Router
  ) {

  }

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(auth.login),
      /** An EMPTY observable only emits completion. Replace with your own observable stream */
      switchMap(({ numTarjeta, nip }) => this.AuthService.login(numTarjeta, nip).pipe(
        map(({ cuenta, token }) => {
          console.log(cuenta, token);
          localStorage.setItem('token', token);
          localStorage.setItem('cuenta', JSON.stringify(cuenta));
          this.router.navigate(["/menu-principal"], {
            replaceUrl: true
          });
          return auth.loginSuccess({ cuenta, token })
        }),
        catchError((error) => {
          console.error(error);
          return of(auth.loginFailure({ error }));
        })
      )));
  });
}
