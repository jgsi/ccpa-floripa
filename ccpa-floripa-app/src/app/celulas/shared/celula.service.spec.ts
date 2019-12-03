import { TestBed } from '@angular/core/testing';

import { CelulaService } from './celula.service';

describe('CelulaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CelulaService = TestBed.get(CelulaService);
    expect(service).toBeTruthy();
  });
});
