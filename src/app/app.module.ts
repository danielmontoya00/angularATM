import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsertarTarjetaComponent } from './insertar-tarjeta/insertar-tarjeta.component';
import { InsertarNipTarjetaComponent } from './insertar-nip-tarjeta/insertar-nip-tarjeta.component';
import { RetirarEfectivoComponent } from './retirar-efectivo/retirar-efectivo.component';
import { DepositarComponent } from './depositar/depositar.component';
import { BalanceCuentaComponent } from './balance-cuenta/balance-cuenta.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { HeaderComponent } from './shared/header/header.component';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/app.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { EffectsArray } from './store/effects';
import { HttpClientModule } from '@angular/common/http';
import { RetirarEfectivoMessageComponent } from './retirar-efectivo-message/retirar-efectivo-message.component';
import { SinFondosComponent } from './sin-fondos/sin-fondos.component';
import { TransferenciaExitosaComponent } from './transferencia-exitosa/transferencia-exitosa.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertarTarjetaComponent,
    InsertarNipTarjetaComponent,
    RetirarEfectivoComponent,
    DepositarComponent,
    BalanceCuentaComponent,
    MenuPrincipalComponent,
    HeaderComponent,
    RetirarEfectivoMessageComponent,
    SinFondosComponent,
    TransferenciaExitosaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducers),
    FormsModule,
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot(EffectsArray),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
