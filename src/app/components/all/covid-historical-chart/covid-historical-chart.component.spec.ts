import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidHistoricalChartComponent } from './covid-historical-chart.component';

describe('CovidHistoricalChartComponent', () => {
  let component: CovidHistoricalChartComponent;
  let fixture: ComponentFixture<CovidHistoricalChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidHistoricalChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidHistoricalChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
