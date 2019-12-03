import { TestBed } from '@angular/core/testing';

import { LancamentoDataService } from './lancamento-data.service';

describe('LancamentoDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LancamentoDataService = TestBed.get(LancamentoDataService);
    expect(service).toBeTruthy();
  });
});
