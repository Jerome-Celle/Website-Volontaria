import { TestBed, inject } from '@angular/core/testing';

import { EventService } from './event.service';
import {AppModule} from '../app.module';

describe('EventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(
      {imports: [AppModule] }
    )
  });

  it('should be created', inject([EventService], (service: EventService) => {
    expect(service).toBeTruthy();
  }));
});
