import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsecsubdoComponent } from './editsecsubdo.component';

describe('EditsecsubdoComponent', () => {
  let component: EditsecsubdoComponent;
  let fixture: ComponentFixture<EditsecsubdoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditsecsubdoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsecsubdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
