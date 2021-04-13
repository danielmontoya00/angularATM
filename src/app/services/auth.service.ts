import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
import { environment } from 'src/environments/environment';
import { Cuenta } from '../../models/cuenta.model';
import { map } from 'rxjs/operators';
import { cerrarSesion, llenarSesion } from '../store/actions/auth.actions';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth: boolean = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store<AppState>,
  ) { }

  login(numTarjeta: string, nip: string) {
    const formData = new FormData();
    formData.append('tarjeta', numTarjeta);
    formData.append('nip', nip)

    return this.http.get(`${environment.apiURL}/login/${numTarjeta}/${nip}`).pipe(
      map((res: { success: boolean, token: string, cuenta: Cuenta }) => ({
        token: res.token,
        cuenta: res.cuenta
      }))
    );
  }

  getCuenta() {
    let usuario = localStorage.getItem('cuenta');
    if (!usuario) {
      this.logout();
      return null;
    }
    let usuarioObj: Cuenta;
    usuarioObj = JSON.parse(usuario);
    usuario = Object.setPrototypeOf(usuario, Cuenta.prototype);
    return usuarioObj;
  }

  isAuth() {
    const token = localStorage.getItem('token');
    const usuario = localStorage.getItem('cuenta');
    if (!token || !usuario) { // No tiene token
      console.log("NO TIENE TOKEN")
      this.logout();
      return false;
    }

    const helper = new JwtHelperService();
    const isExpired = helper.isTokenExpired(token);

    if (!isExpired) { // Si no está expirado el token
      if (!this.auth) {
        this.store.dispatch(llenarSesion({ cuenta: this.getCuenta() }));
      }
      return true;
    }

    this.logout(); // Token expirado
    return false;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('cuenta');
    this.router.navigate(['insertar-tarjeta']);
    this.store.dispatch(cerrarSesion()); // Limpia el store de Auth
  }

  verificarNecesitaLogin() {
    const token = localStorage.getItem('token');
    const usuario = localStorage.getItem('cuenta');
    if (token && usuario) {
      this.router.navigate(['menu-principal']);
      return false;
    }
    return true;
  }

}
