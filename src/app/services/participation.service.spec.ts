import { TestBed, inject } from '@angular/core/testing';

import { ParticipationService } from './participation.service';
import {AppModule} from '../app.module';

describe('ParticipationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(
      {imports: [AppModule] }
    )
  });

  it('should be created', inject([ParticipationService], (service: ParticipationService) => {
    expect(service).toBeTruthy();
  }));
});
