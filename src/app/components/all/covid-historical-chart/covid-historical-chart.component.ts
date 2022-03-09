import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { CovidService } from 'src/app/services';

@Component({
  selector: 'app-covid-historical-chart',
  templateUrl: './covid-historical-chart.component.html',
  styleUrls: ['./covid-historical-chart.component.css'],
  providers: [CovidService]
})
export class CovidHistoricalChartComponent implements OnInit {

  constructor(private covid: CovidService) { }

  @Input() pageIndex: number = 0;
  @Input() pageSize: number = 0;
  @Output() totalCount = new EventEmitter<number>();

  store: any;

  async ngOnInit() {
    this.store = await this.covid.getLatestData();
    this.store.pageIndex(0);
    this.store.pageSize(5);
    this.loadAndComputeTotalSize(this.store);
  }

  loadAndComputeTotalSize = store => {
    store.load().done((_, total) => {
      this.totalCount.emit(total);
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }

  changePageSize = (num: number) => {
    this.store.pageSize(num);
    this.loadAndComputeTotalSize(this.store);
  }

  changePageIndex = (num: number) => {
    this.store.pageIndex(num);
    this.store.load()
    this.loadAndComputeTotalSize(this.store);
  }

}
