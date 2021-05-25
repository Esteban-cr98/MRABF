import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsubdoComponent } from './editsubdo.component';

describe('EditsubdoComponent', () => {
  let component: EditsubdoComponent;
  let fixture: ComponentFixture<EditsubdoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditsubdoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsubdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
