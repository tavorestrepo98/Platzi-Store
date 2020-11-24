import { TestBed } from '@angular/core/testing';

import { AuthInterceptor } from './auth.interceptor';

xdescribe('AuthService', () => {
  let interceptor: AuthInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    interceptor = TestBed.inject(AuthInterceptor);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
