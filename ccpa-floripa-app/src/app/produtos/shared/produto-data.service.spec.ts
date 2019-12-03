import { TestBed } from '@angular/core/testing';

import { ProdutoDataService } from './produto-data.service';

describe('ProdutoDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProdutoDataService = TestBed.get(ProdutoDataService);
    expect(service).toBeTruthy();
  });
});
