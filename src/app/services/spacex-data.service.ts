import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SpacexDataService {

  private apiURL = environment.spacex_API_URL;
  constructor(private http: HttpClient) { }

  getSpaceXData(filterParams?): Observable<any> {
    let yearParam = ''; let landParam = ''; let launchParam = '';
    if (filterParams) {
      if (filterParams.launchStatus !== undefined && filterParams.launchStatus !== '') {
        launchParam += '&launch_success=' + filterParams.launchStatus;
      }
      if (filterParams.landStatus !== undefined && filterParams.landStatus !== '') {
        landParam += '&land_success=' + filterParams.landStatus;
      }
      if (filterParams.year !== '') {
        yearParam += '&launch_year=' + filterParams.year;
      }
    }
    const url = this.apiURL + '?limit=100' + launchParam + landParam + yearParam;
    return this.http.get<any>(url);
  }
}
