import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.totalCount)
  }

  ngOnChanges(e) {
    console.log(e)
  }

  maxPageIndex: number = 2;

  @Input() totalCount: number = 0;
  @Input() pageSize: number = 5;

  @Output() selectedPageIndex = new EventEmitter<number>();
  @Output() selectedPageSize = new EventEmitter<number>();

  changePageIndex = (num: number) => {
    this.selectedPageIndex.emit(num);
  }

  changePageSize = (num: number) => {
    this.selectedPageSize.emit(num)
  }

  displayNumberValueChanged = e => {
    this.changePageSize(e.value)
  }

  pageIndexNumberValueChanged = e => {
    this.changePageIndex(e.value)
  }

}
