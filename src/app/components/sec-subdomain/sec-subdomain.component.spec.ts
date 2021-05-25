import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecSubdomainComponent } from './sec-subdomain.component';

describe('SecSubdomainComponent', () => {
  let component: SecSubdomainComponent;
  let fixture: ComponentFixture<SecSubdomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecSubdomainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecSubdomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
