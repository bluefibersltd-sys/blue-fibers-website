import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonTextile } from './non-textile';

describe('NonTextile', () => {
  let component: NonTextile;
  let fixture: ComponentFixture<NonTextile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NonTextile],
    }).compileComponents();

    fixture = TestBed.createComponent(NonTextile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
