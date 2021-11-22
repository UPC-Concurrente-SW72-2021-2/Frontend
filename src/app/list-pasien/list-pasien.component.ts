import { Component, OnInit } from '@angular/core';
import { PasienService } from '../pasien.service';
import { Pasien } from '../model/pasien';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pasien',
  templateUrl: './list-pasien.component.html',
  styleUrls: ['./list-pasien.component.css']
})
export class ListPasienComponent implements OnInit {
  edad: number=0;
  pasiens: Pasien[]=[];
  constructor(private router:Router, private pasienService:PasienService) { }

  ngOnInit(): void {
    this.loadDataPasiens();
  }

  loadDataPasiens(){
    this.pasienService.getPasienList()
    .subscribe(pasiens=>this.pasiens=pasiens);
  }

  searchPasienByEdad(){
    if(this.edad){
      this.pasienService.getPasienByEdad(this.edad)
      .subscribe(pasiens=>this.pasiens=pasiens);
    }
    else
      this.loadDataPasiens();
  }

}
