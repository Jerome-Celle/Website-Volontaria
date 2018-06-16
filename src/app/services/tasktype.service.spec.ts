import { TestBed, inject } from '@angular/core/testing';

import { TasktypeService } from './tasktype.service';
import {AppModule} from '../app.module';

describe('TasktypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(
      {imports: [AppModule] }
    )
  });

  it('should be created', inject([TasktypeService], (service: TasktypeService) => {
    expect(service).toBeTruthy();
  }));
});
