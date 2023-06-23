import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitacaoComponent } from './solicitacao/solicitacao.component';
import { VisualizacaoReservasComponent } from './visualizacao-reservas/visualizacao-reservas.component';

const routes: Routes = [
  {path: 'solicitacao', component: SolicitacaoComponent},
  {path: 'visualizacao',component: VisualizacaoReservasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
