import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMembroComponent } from './edit-membro.component';

describe('EditMembroComponent', () => {
  let component: EditMembroComponent;
  let fixture: ComponentFixture<EditMembroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMembroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMembroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
