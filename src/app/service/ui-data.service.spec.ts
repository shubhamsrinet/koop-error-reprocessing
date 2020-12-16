import { TestBed } from '@angular/core/testing';

import { OfgDataService } from './ui-data.service';

describe('OfgDataService', () => {
  let service: OfgDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfgDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
