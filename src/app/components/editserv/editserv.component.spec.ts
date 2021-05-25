import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditservComponent } from './editserv.component';

describe('EditservComponent', () => {
  let component: EditservComponent;
  let fixture: ComponentFixture<EditservComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditservComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
