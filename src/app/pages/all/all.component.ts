import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  constructor() { }

  pageIndex = 5;
  pageSize = 5;
  totalCount = 0;

  ngOnInit(): void {
  }

  setPageIndex = (num: number) => {
    this.pageIndex = num;
  }

  setPageSize = (num: number) => {
    this.pageSize = num;
  }

  setTotalCount = num => {
    console.log("setiting", num)
    this.totalCount = num.totalCount;
  }

}
