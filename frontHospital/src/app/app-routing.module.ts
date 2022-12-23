import { HospitaisEditarComponent } from './hospitais-editar/hospitais-editar.component';
import { HospitaisListaComponent } from './hospitais-lista/hospitais-lista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'lista', component: HospitaisListaComponent },
  { path: 'editar/:id', component: HospitaisEditarComponent },
  { path: 'listaHospitais', component: HospitaisListaComponent },
  { path: 'editarAluno', component: HospitaisEditarComponent },
  { path: 'editarAluno/:id', component: HospitaisEditarComponent },
  { path: '**', redirectTo: 'lista' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
