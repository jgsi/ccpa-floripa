import { TestBed } from '@angular/core/testing';

import { CelulaDataService } from './celula-data.service';

describe('CelulaDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CelulaDataService = TestBed.get(CelulaDataService);
    expect(service).toBeTruthy();
  });
});
