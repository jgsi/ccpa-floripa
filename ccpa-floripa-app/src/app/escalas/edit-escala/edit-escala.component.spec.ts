import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEscalaComponent } from './edit-escala.component';

describe('EditEscalaComponent', () => {
  let component: EditEscalaComponent;
  let fixture: ComponentFixture<EditEscalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEscalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEscalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
