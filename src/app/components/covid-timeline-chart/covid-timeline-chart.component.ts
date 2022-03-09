import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/services';

@Component({
  selector: 'app-covid-timeline-chart',
  templateUrl: './covid-timeline-chart.component.html',
  styleUrls: ['./covid-timeline-chart.component.css'],
  providers: [CovidService]
})
export class CovidTimelineChartComponent implements OnInit {

  constructor(private covid: CovidService) { }

  data: any;

  async ngOnInit() {

    this.data = await this.covid.getHistoricalData()

    // this.data.subscribe(tes => {
    //   console.log(tes)
    // })

  }

}
