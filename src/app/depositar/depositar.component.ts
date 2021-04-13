import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Cuenta } from 'src/models/cuenta.model';
import { AuthService } from '../services/auth.service';
import { balance, depositar } from '../store/actions/main.actions';
import { AppState } from '../store/app.reducer';

@Component({
  selector: 'app-depositar',
  templateUrl: './depositar.component.html',
  styleUrls: ['./depositar.component.scss']
})
export class DepositarComponent implements OnInit {
  cargando = false;
  cuenta: Cuenta;
  depositarForm: FormGroup;

  constructor(
    private store: Store<AppState>,
    private authService: AuthService,
    private fb: FormBuilder,
  ) {
    this.store.select('mainReducer').subscribe(((x) => {
      this.cargando = x.cargando;
      this.cuenta = x.cuenta;
    }));

    this.store.dispatch(balance({
      cuenta_id: this.authService.getCuenta().id
    }));

    this.depositarForm = this.fb.group({
      cuenta: ['', [Validators.required]],
      cantidad: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // Si la forma es valida
    if (this.depositarForm.valid) {
      // Ejecutar la accion de logear
      this.store.dispatch(depositar(
        {
          cuentaEmisora: this.authService.getCuenta().id,
          numCuenta: this.depositarForm.value.cuenta,
          cantidad: this.depositarForm.value.cantidad
      }));
    } else { // caso contrario
      // Marcar todos los inputs como marcados para que aparezca error
      for (const i in this.depositarForm.controls) {
        this.depositarForm.controls[i].setValue(this.depositarForm.controls[i].value);
        this.depositarForm.controls[i].markAsTouched();
      }
    }
  }

}
