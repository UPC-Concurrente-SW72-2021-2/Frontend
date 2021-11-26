import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from "./pages/landing/landing.component";
import {FormInputComponent} from "./pages/form-input/form-input.component";
import {ListPasienComponent} from "./pages/list-pasien/list-pasien.component";

const routes: Routes = [
  { path: '' , component: LandingComponent},
  {path: 'form', component: FormInputComponent},
  {path: 'listar', component:ListPasienComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
