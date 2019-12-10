import { TestBed } from '@angular/core/testing';

import { CalendarioDataService } from './calendario-data.service';

describe('CalendarioDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalendarioDataService = TestBed.get(CalendarioDataService);
    expect(service).toBeTruthy();
  });
});
