import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-covid-pie-chart',
  templateUrl: './covid-pie-chart.component.html',
  styleUrls: ['./covid-pie-chart.component.css'],
  providers: [CovidService]
})
export class CovidPieChartComponent implements OnInit {

  constructor(private covid: CovidService, private route: ActivatedRoute) { }

  store: any;
  countryid: any;// 166;
  country: any;
  ratio: any



  async ngOnInit() {


    this.countryid = this.route.snapshot.params['id'] || 166

    console.log(this.route.snapshot)
    console.log("id", this.countryid)

    this.store = await this.covid.getLatestData();
    console.log("id", this.countryid)
    this.store.filter(['id', '=', this.countryid])
    this.store.load().done(res => {
      console.log(res, '....')
      this.computeRatios(res[0])
    })
  }

  computeRatios = obj => {
    this.ratio = []



    this.ratio.push({
      name: 'population',
      value: obj.population - obj.total_cases - obj.total_deaths
    })

    this.ratio.push({
      name: 'cases',
      value: obj.total_cases
    })

    this.ratio.push({
      name: 'deaths',
      value: obj.total_deaths
    })

    console.log(this.ratio)
  }

}
