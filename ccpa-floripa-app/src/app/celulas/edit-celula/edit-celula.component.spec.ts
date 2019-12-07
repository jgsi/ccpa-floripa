import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCelulaComponent } from './edit-celula.component';

describe('EditCelulaComponent', () => {
  let component: EditCelulaComponent;
  let fixture: ComponentFixture<EditCelulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCelulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCelulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
