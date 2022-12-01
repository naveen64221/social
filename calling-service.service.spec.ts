import { TestBed } from '@angular/core/testing';

import { CallingServiceService } from './calling-service.service';

describe('CallingServiceService', () => {
  let service: CallingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
