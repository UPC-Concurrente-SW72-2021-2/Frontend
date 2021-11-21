import { Component, OnInit } from '@angular/core';
import {Vaccinated} from "../../models/vaccinated";
import {VaccinatedApiService} from "../../services/vaccinated/vaccinated-api.service";

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css'],
})
export class FormInputComponent implements OnInit {


  vaccines = ['Pfizer','Astrazeneca','Sinopharm']
  vaccinatedModel =
    new Vaccinated(1,
      0,
      0,
      0,
      0,
      0,
      0,
      0);

  constructor(private vaccinatedSevice : VaccinatedApiService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.vaccinatedModel)
    this.vaccinatedSevice.addVaccinated(this.vaccinatedModel).subscribe(
      data => window.alert(data),
      error => window.alert(error)
    );
  }

}
