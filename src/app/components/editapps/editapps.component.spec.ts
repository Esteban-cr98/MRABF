import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditappsComponent } from './editapps.component';

describe('EditappsComponent', () => {
  let component: EditappsComponent;
  let fixture: ComponentFixture<EditappsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditappsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditappsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
