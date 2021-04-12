import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { InsertarTarjetaComponent } from './insertar-tarjeta/insertar-tarjeta.component';
import { RetirarEfectivoComponent } from './retirar-efectivo/retirar-efectivo.component';
import { DepositarComponent } from './depositar/depositar.component';
import { BalanceCuentaComponent } from './balance-cuenta/balance-cuenta.component';

const routes: Routes = [
  {
    path: 'menu-principal',
    component: MenuPrincipalComponent
  },
  {
    path: 'insertar-tarjeta',
    component: InsertarTarjetaComponent
  },
  {
    path: 'retirar',
    component: RetirarEfectivoComponent
  },
  {
    path: 'retirar/:cantidad',
    component: RetirarEfectivoComponent
  },
  {
    path: 'depositar',
    component: DepositarComponent
  },
  {
    path: 'balance',
    component: BalanceCuentaComponent
  },
  {
    path: 'insertar-nip',
    component: BalanceCuentaComponent
  },
  {
    path: '',
    redirectTo: 'insertar-tarjeta',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
