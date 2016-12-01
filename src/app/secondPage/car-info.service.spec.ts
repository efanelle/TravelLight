/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CarInfoService } from './car-info.service';

describe('CarInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarInfoService]
    });
  });

  it('should ...', inject([CarInfoService], (service: CarInfoService) => {
    expect(service).toBeTruthy();
  }));
});
