import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
import { Cuenta } from '../../models/cuenta.model';
import { balance } from '../store/actions/main.actions';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-balance-cuenta',
  templateUrl: './balance-cuenta.component.html',
  styleUrls: ['./balance-cuenta.component.scss']
})
export class BalanceCuentaComponent implements OnInit {
  cargando = false;
  cuenta: Cuenta;

  constructor(
    private store: Store<AppState>,
    private authService: AuthService
  ) {
    this.store.select('mainReducer').subscribe(((x) => {
      this.cargando = x.cargando;
      this.cuenta = x.cuenta;
    }));

    this.store.dispatch(balance({
      cuenta_id: this.authService.getCuenta().id
    }))
  }

  ngOnInit(): void {
  }

}
