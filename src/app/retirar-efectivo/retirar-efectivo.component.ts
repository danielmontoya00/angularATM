import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Cuenta } from 'src/models/cuenta.model';
import { AuthService } from '../services/auth.service';
import { AppState } from '../store/app.reducer';
import { balance, retirar } from '../store/actions/main.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-retirar-efectivo',
  templateUrl: './retirar-efectivo.component.html',
  styleUrls: ['./retirar-efectivo.component.scss']
})
export class RetirarEfectivoComponent implements OnInit {
  cargando = false;
  cuenta: Cuenta;
  retirarForm: FormGroup;

  constructor(
    private store: Store<AppState>,
    private authService: AuthService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {
    this.store.select('mainReducer').subscribe(((x) => {
      this.cargando = x.cargando;
      this.cuenta = x.cuenta;
    }));

    this.store.dispatch(balance({
      cuenta_id: this.authService.getCuenta().id
    }))

    this.retirarForm = this.fb.group({
      cantidad: ['', [Validators.required]]
    });

    const cantidadForzada = this.activatedRoute.snapshot.paramMap.get('cantidad');

    console.log(cantidadForzada);

    if(cantidadForzada !== null) {
      this.store.dispatch(retirar({
        cuenta_id: this.authService.getCuenta().id,
        cantidad: Number(cantidadForzada)
      }));
    }
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // Si la forma es valida
    if (this.retirarForm.valid) {
      // Ejecutar la accion de logear
      this.store.dispatch(retirar({
        cuenta_id: this.authService.getCuenta().id,
        cantidad: this.retirarForm.value.cantidad
      }));


    } else { // caso contrario
      // Marcar todos los inputs como marcados para que aparezca error
      for (const i in this.retirarForm.controls) {
        this.retirarForm.controls[i].setValue(this.retirarForm.controls[i].value);
        this.retirarForm.controls[i].markAsTouched();
      }
    }
  }


}
