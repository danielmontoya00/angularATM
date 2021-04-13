import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Cuenta } from 'src/models/cuenta.model';
import { AppState } from '../store/app.reducer';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store<AppState>,
  ) { }

  getBalance(cuentaId: number) {
    return this.http.get(`${environment.apiURL}/getBalance/${cuentaId}`).pipe(
      map((res: { success: boolean, result: Cuenta }) => ({
        cuenta: res.result
      }))
    );
  }

  retirar(cuentaId: number, cantidad: number) {
    return this.http.patch(`${environment.apiURL}/retirarEfectivo/${cuentaId}/${cantidad}`, {}).pipe(
      map((res: { success: boolean }) => ({
        success: res.success
      }))
    );
  }

  depositar(cuentaEmisora: number, numCuenta: string, cantidad: number) {
    return this.http.patch(`${environment.apiURL}/depositarDinero/${cuentaEmisora}/${numCuenta}/${cantidad}`, {}).pipe(
      map((res: { success: boolean }) => ({
        success: res.success
      }))
    );
  }
}
