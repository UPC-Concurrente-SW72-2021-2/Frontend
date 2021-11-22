import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person';
import { PersonApiService } from '../../services/person/person-api.service';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css'],
})
export class FormInputComponent implements OnInit {
  vaccines = ['Pfizer', 'Astrazeneca', 'Sinopharm'];
  personModel = new Person(1, 0, 0, 0, 0, 0, 0, 0);

  constructor(private personSevice: PersonApiService) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.personModel);
    this.personSevice.addPerson(this.personModel).subscribe(
      (data) => window.alert(data),
      (error) => window.alert(error)
    );
  }
}
