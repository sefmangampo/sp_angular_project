import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidTimelineChartComponent } from './covid-timeline-chart.component';

describe('CovidTimelineChartComponent', () => {
  let component: CovidTimelineChartComponent;
  let fixture: ComponentFixture<CovidTimelineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidTimelineChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidTimelineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
