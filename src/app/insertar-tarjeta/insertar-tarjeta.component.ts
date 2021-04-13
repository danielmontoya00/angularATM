import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insertar-tarjeta',
  templateUrl: './insertar-tarjeta.component.html',
  styleUrls: ['./insertar-tarjeta.component.scss']
})
export class InsertarTarjetaComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      numTarjeta: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // Si la forma es valida
    if (this.loginForm.valid) {
      // Ejecutar la accion de logear

      this.router.navigate([
        'insertar-nip', this.loginForm.value.numTarjeta
      ])

    } else { // caso contrario
      // Marcar todos los inputs como marcados para que aparezca error
      for (const i in this.loginForm.controls) {
        this.loginForm.controls[i].setValue(this.loginForm.controls[i].value);
        this.loginForm.controls[i].markAsTouched();
      }
    }
  }

}
