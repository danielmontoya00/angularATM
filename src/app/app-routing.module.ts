import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { InsertarTarjetaComponent } from './insertar-tarjeta/insertar-tarjeta.component';
import { RetirarEfectivoComponent } from './retirar-efectivo/retirar-efectivo.component';
import { DepositarComponent } from './depositar/depositar.component';
import { BalanceCuentaComponent } from './balance-cuenta/balance-cuenta.component';
import { InsertarNipTarjetaComponent } from './insertar-nip-tarjeta/insertar-nip-tarjeta.component';
import { AuthorizeGuard } from './guards/authorize.guard';
import { NoUserGuard } from './guards/no-user.guard';
import { RetirarEfectivoMessageComponent } from './retirar-efectivo-message/retirar-efectivo-message.component';
import { SinFondosComponent } from './sin-fondos/sin-fondos.component';
import { TransferenciaExitosaComponent } from './transferencia-exitosa/transferencia-exitosa.component';

const routes: Routes = [
  {
    path: 'menu-principal',
    component: MenuPrincipalComponent,
    canActivate: [AuthorizeGuard]
  },
  {
    path: 'insertar-tarjeta',
    component: InsertarTarjetaComponent,
    canActivate: [NoUserGuard]
  },
  {
    path: 'retirar',
    component: RetirarEfectivoComponent,
    canActivate: [AuthorizeGuard]
  },
  {
    path: 'retirar/:cantidad',
    component: RetirarEfectivoComponent,
    canActivate: [AuthorizeGuard]
  },
  {
    path: 'depositar',
    component: DepositarComponent,
    canActivate: [AuthorizeGuard]
  },
  {
    path: 'balance',
    component: BalanceCuentaComponent,
    canActivate: [AuthorizeGuard]
  },
  {
    path: 'retirar-efectivo-message',
    component: RetirarEfectivoMessageComponent,
    canActivate: [AuthorizeGuard]
  },
  {
    path: 'sin-fondos',
    component: SinFondosComponent,
    canActivate: [AuthorizeGuard]
  },
  {
    path: 'transferencia-exitosa',
    component: TransferenciaExitosaComponent,
    canActivate: [AuthorizeGuard]
  },
  {
    path: 'insertar-nip/:numTarjeta',
    component: InsertarNipTarjetaComponent,
    canActivate: [NoUserGuard]
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
