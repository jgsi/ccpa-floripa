import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCelulaComponent } from './list-celula.component';

describe('ListCelulaComponent', () => {
  let component: ListCelulaComponent;
  let fixture: ComponentFixture<ListCelulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCelulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCelulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
