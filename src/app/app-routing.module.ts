import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from "./pages/landing/landing.component";
import {FormInputComponent} from "./pages/form-input/form-input.component";

const routes: Routes = [
  { path: 'main' , component: LandingComponent},
  {path: 'form', component: FormInputComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
