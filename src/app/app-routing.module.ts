import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'extrato',pathMatch:'full' },
  {path: 'extrato',component: ExtratoComponent},
  {path: 'nova-transferencia', component: NovaTransferenciaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
