import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { FormInputComponent } from './pages/form-input/form-input.component';
import { CommonModule } from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ListPasienComponent } from './pages/list-pasien/list-pasien.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    FormInputComponent,
    NavbarComponent,
    ListPasienComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
