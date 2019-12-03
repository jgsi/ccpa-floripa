import { TestBed } from '@angular/core/testing';

import { ArrecadacaoDataService } from './arrecadacao-data.service';

describe('ArrecadacaoDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArrecadacaoDataService = TestBed.get(ArrecadacaoDataService);
    expect(service).toBeTruthy();
  });
});
