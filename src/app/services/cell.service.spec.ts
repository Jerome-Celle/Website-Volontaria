import { TestBed, inject } from '@angular/core/testing';

import { CellService } from './cell.service';
import {AppModule} from '../app.module';

describe('CellService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(
      {imports: [AppModule] }
    )
  });

  it('should be created', inject([CellService], (service: CellService) => {
    expect(service).toBeTruthy();
  }));
});
