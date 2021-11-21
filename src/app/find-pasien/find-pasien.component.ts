import { Component, OnInit } from '@angular/core';
import { Pasien } from '../model/pasien';
import { PasienService } from '../pasien.service';

@Component({
  selector: 'app-find-pasien',
  templateUrl: './find-pasien.component.html',
  styleUrls: ['./find-pasien.component.css']
})
export class FindPasienComponent implements OnInit {

  id_persona : number=0;
  pasien: Pasien = new Pasien();
  id_vacunados_covid19 : number=0;
  id_eess : number=0;
  id_centro_vacunacion : number=0;
  id_vacuna : number=0;
  id_grupo_riesgo : number=0;
  dosis : number=0;
  edad : number=0;
  pasiens: Pasien[]=[];

  constructor(private pasienService: PasienService) { }

  ngOnInit(): void {
    
  }

  searchPasienByEdad(){
    this.pasienService.getPasienByEdad(this.edad)
    .subscribe(pasiens => {
      console.log(pasiens)
      this.pasiens=pasiens});
  }

  searchPasienById(){
    this.pasienService.getPasienById(this.id_persona)
    .subscribe(pasiens => {
      console.log(pasiens)
      this.pasiens=pasiens});
  }

  searchPasienByDosis(){
    this.pasienService.getPasienByDosis(this.dosis)
    .subscribe(pasiens => {
      console.log(pasiens)
      this.pasiens=pasiens});
  }


}