import { TestBed } from '@angular/core/testing';

import { EscalaDataService } from './escala-data.service';

describe('EscalaDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EscalaDataService = TestBed.get(EscalaDataService);
    expect(service).toBeTruthy();
  });
});
