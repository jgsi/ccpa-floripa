import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLancamentosComponent } from './list-lancamentos.component';

describe('ListLancamentosComponent', () => {
  let component: ListLancamentosComponent;
  let fixture: ComponentFixture<ListLancamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLancamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLancamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
