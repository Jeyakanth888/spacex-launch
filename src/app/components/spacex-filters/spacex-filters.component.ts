import {
  Component, Input, OnInit, ViewChild, ElementRef, Output, EventEmitter,
  AfterViewInit
} from '@angular/core';

@Component({
  selector: 'app-spacex-filters',
  templateUrl: './spacex-filters.component.html',
  styleUrls: ['./spacex-filters.component.css']
})
export class SpacexFiltersComponent implements OnInit, AfterViewInit {

  filterBtns: any = [{ text: 'True', val: true }, { text: 'False', val: false }];
  defaultYears: any = ['2006', '2007', '2019', '2020'];
  selectedYear = '';
  selectedLaunchStatus: any;
  selectedLandStatus: any;
  @Input() filterYears: any;
  @ViewChild('yearsBtns', { static: false }) yearBtns: ElementRef;
  @ViewChild('launchBtns', { static: false }) launchBtns: ElementRef;
  @ViewChild('landingBtns', { static: false }) landingBtns: ElementRef;
  @ViewChild('filterPanel', { static: false }) filterPanel: ElementRef;
  @Output() filtered = new EventEmitter<object>();

  constructor() { }

  ngOnInit(): void {
    if (this.filterYears.length === 0) {
      this.filterYears = this.defaultYears;
    }
  }

  ngAfterViewInit(): void {
    this.filterPanel.nativeElement.classList.remove('disabled');
  }

  onClickFilter(event, val: any, type: string): void {
    const elementCls = event.target.classList;
    const isActive = elementCls.contains('active');
    switch (type) {
      case 'year':
        if (isActive) {
          this.selectedYear = '';
        } else {
          this.selectedYear = val;
        }
        break;
      case 'launch':
        if (isActive) {
          this.selectedLaunchStatus = '';
        } else {
          this.selectedLaunchStatus = val;
        }
        break;
      case 'land':
        if (isActive) {
          this.selectedLandStatus = '';
        } else {
          this.selectedLandStatus = val;
        }
        break;
    }
    this.emitFilteredValues();
    if (isActive) {
      elementCls.remove('active');
    } else {
      this.addActiveClass(event, type);
    }
  }

  addActiveClass(ele, type: string): void {
    let getbtnsEle = [];
    switch (type) {
      case 'year':
        getbtnsEle = this.yearBtns.nativeElement.querySelectorAll('.btn');
        break;
      case 'launch':
        getbtnsEle = this.launchBtns.nativeElement.querySelectorAll('.btn');
        break;
      case 'land':
        getbtnsEle = this.landingBtns.nativeElement.querySelectorAll('.btn');
        break;
    }
    getbtnsEle.forEach(element => {
      element.classList.remove('active');
    });
    ele.target.classList.add('active');
  }

  emitFilteredValues(): void {
    this.filtered.emit({ year: this.selectedYear, launchStatus: this.selectedLaunchStatus, landStatus: this.selectedLandStatus });
  }

}
