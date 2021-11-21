import { TestBed } from '@angular/core/testing';

import { VaccinatedApiService } from './vaccinated-api.service';

describe('PostsApiService', () => {
  let service: VaccinatedApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VaccinatedApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
