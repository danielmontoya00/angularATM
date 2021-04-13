import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { login } from '../store/actions/auth.actions';
import { AppState } from '../store/app.reducer';

@Component({
  selector: 'app-insertar-nip-tarjeta',
  templateUrl: './insertar-nip-tarjeta.component.html',
  styleUrls: ['./insertar-nip-tarjeta.component.scss']
})
export class InsertarNipTarjetaComponent implements OnInit {
  numTarjeta: string;
  loginForm: FormGroup;


  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private store: Store<AppState>,
  ) {
    this.numTarjeta = this.activatedRoute.snapshot.paramMap.get('numTarjeta');

    this.loginForm = this.fb.group({
      numTarjeta: [this.numTarjeta, [Validators.required]],
      nip: ['', Validators.required]
    });


  }

  ngOnInit(): void {
  }

  onSubmit() {
    // Si la forma es valida
    if (this.loginForm.valid) {
      console.log(this.loginForm);
      // Ejecutar la accion de logear
      this.store.dispatch(login({
        numTarjeta: this.loginForm.value.numTarjeta,
        nip: this.loginForm.value.nip
      }));


    } else { // caso contrario
      // Marcar todos los inputs como marcados para que aparezca error
      for (const i in this.loginForm.controls) {
        this.loginForm.controls[i].setValue(this.loginForm.controls[i].value);
        this.loginForm.controls[i].markAsTouched();
      }
    }
  }

}
