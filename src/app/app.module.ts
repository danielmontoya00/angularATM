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

@NgModule({
  declarations: [
    AppComponent,
    InsertarTarjetaComponent,
    InsertarNipTarjetaComponent,
    RetirarEfectivoComponent,
    DepositarComponent,
    BalanceCuentaComponent,
    MenuPrincipalComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
