import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Textile } from './textile';

describe('Textile', () => {
  let component: Textile;
  let fixture: ComponentFixture<Textile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Textile],
    }).compileComponents();

    fixture = TestBed.createComponent(Textile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
