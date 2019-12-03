import { TestBed } from '@angular/core/testing';

import { ArrecadacaoService } from './arrecadacao.service';

describe('ArrecadacaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArrecadacaoService = TestBed.get(ArrecadacaoService);
    expect(service).toBeTruthy();
  });
});
