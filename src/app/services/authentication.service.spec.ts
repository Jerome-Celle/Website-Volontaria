import { TestBed, inject } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import {AppModule} from '../app.module';

describe('AuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(
      {imports: [AppModule] }
    )
  });

  it('should be created', inject([AuthenticationService], (service: AuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
