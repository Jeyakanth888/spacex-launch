import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SpacexDataService } from 'src/app/services/spacex-data.service';
import { Constant } from 'src/app/shared/constants/constant';

@Component({
  selector: 'app-spacex-launch-programs',
  templateUrl: './spacex-launch-programs.component.html',
  styleUrls: ['./spacex-launch-programs.component.css'],
})

export class SpacexLaunchProgramsComponent implements OnInit {
  launchedYears: any = [];
  showLoader = false;
  launchSpaceRecords: any = [];
  allRecords: any = [];
  showMessage = '';
  constructor(private spacexService: SpacexDataService) { }

  ngOnInit(): void {
    this.loadAllSpaceXData();
  }

  /* getting 100 records of spacex launch programs*/
  loadAllSpaceXData(): void {
    this.showLoader = true;
    const sub$ = this.spacexService.getSpaceXData().subscribe(resp => {
      this.showLoader = false;
      if (resp !== null) {
        this.allRecords = resp;
        this.launchSpaceRecords = resp;
        this.getLaunchedYears();
        this.showPageMessage();
      }
      sub$.unsubscribe();
    }, err => {
      this.apiError();
      sub$.unsubscribe();
    });
  }

  getLaunchedYears(): void {
    const years = this.launchSpaceRecords.map(s => s.launch_year);
    this.launchedYears = years.filter((x, i, a) => a.indexOf(x) === i);
  }

  showPageMessage(): void {
    if (this.launchSpaceRecords.length === 0) {
      this.showMessage = Constant.noDataMsg;
    }
  }

  apiError(): void {
    this.launchSpaceRecords = [];
    this.showLoader = false;
    this.showMessage = Constant.apiErrMsg;
  }

  /* filtering records */
  getSelectedInFilters(selectedVals: object): void {
    this.showLoader = true;
    const sub$ = this.spacexService.getSpaceXData(selectedVals).subscribe(resp => {
      this.showLoader = false;
      if (resp !== null) {
        this.launchSpaceRecords = resp;
        this.showPageMessage();
      }
      sub$.unsubscribe();
    }, err => {
      this.apiError();
      sub$.unsubscribe();
    });
  }

}
