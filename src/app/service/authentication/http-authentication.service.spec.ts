import { TestBed } from '@angular/core/testing';

import { HttpAuthenticationService } from './http-authentication.service';

describe('HttpAuthenticationService', () => {
  let service: HttpAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
