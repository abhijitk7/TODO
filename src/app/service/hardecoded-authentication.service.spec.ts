import { TestBed } from '@angular/core/testing';

import { HardecodedAuthenticationService } from './hardecoded-authentication.service';

describe('HardecodedAuthenticationService', () => {
  let service: HardecodedAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardecodedAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
