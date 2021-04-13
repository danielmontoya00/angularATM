import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AppState } from '../store/app.reducer';
import { Cuenta } from '../../models/cuenta.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-retirar-efectivo-message',
  templateUrl: './retirar-efectivo-message.component.html',
  styleUrls: ['./retirar-efectivo-message.component.scss']
})
export class RetirarEfectivoMessageComponent implements OnInit {
  cargando = false;
  cuenta: Cuenta;

  constructor(
    private router: Router,
    private store: Store<AppState>,
  ) {
    this.store.select('mainReducer').subscribe(((x) => {
      this.cargando = x.cargando;
      this.cuenta = x.cuenta;
    }));
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['menu-principal']);
    }, 3000);
  }

}
