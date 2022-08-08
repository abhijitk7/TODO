import { TestBed } from '@angular/core/testing';

import { HttpIntercepterBasicAuthServiceService } from './http-intercepter-basic-auth-service.service';

describe('HttpIntercepterBasicAuthServiceService', () => {
  let service: HttpIntercepterBasicAuthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpIntercepterBasicAuthServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
