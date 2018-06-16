import { TestBed, inject } from '@angular/core/testing';

import { CycleService } from './cycle.service';
import {AppModule} from '../app.module';

describe('CycleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(
      {imports: [AppModule] }
    )
  });

  it('should be created', inject([CycleService], (service: CycleService) => {
    expect(service).toBeTruthy();
  }));
});
