import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import {FindPasienComponent} from './find-pasien/find-pasien.component'
import { ListPasienComponent } from './list-pasien/list-pasien.component';

const routes: Routes = [
  {path: '',redirectTo:'pasien',pathMatch:'full'},
  //{path: 'buscar', component : FindPasienComponent},
  {path: 'listar', component:ListPasienComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
