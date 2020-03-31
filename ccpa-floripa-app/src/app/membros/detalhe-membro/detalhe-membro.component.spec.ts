import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheMembroComponent } from './detalhe-membro.component';

describe('DetalheMembroComponent', () => {
  let component: DetalheMembroComponent;
  let fixture: ComponentFixture<DetalheMembroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheMembroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheMembroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
