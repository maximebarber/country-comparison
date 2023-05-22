import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCountryStatsComponent } from './display-country-stats.component';

describe('DisplayCountryStatsComponent', () => {
  let component: DisplayCountryStatsComponent;
  let fixture: ComponentFixture<DisplayCountryStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayCountryStatsComponent]
    });
    fixture = TestBed.createComponent(DisplayCountryStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
