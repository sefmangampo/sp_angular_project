import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  private latestUrl = 'https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/latest/owid-covid-latest.json'
  private dailyUrl = 'https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/owid-covid-data.csv'
  private rawData: any
  private convertedData: any;

  constructor(private http: HttpClient, private utils: UtilsService) { }

  getLatestData() {
    return this.http.get(this.latestUrl)
  }



  getHistoricalData() {
    let headers = new HttpHeaders({ Accept: 'text/csv' });

    const options: {
      headers?: HttpHeaders;
      observe?: 'body';
      params?: HttpParams;
      reportProgress?: boolean,
      responseType: 'text',
      withCredentials?: boolean
    } = {
      headers,
      responseType: 'text'
    };

    return this.http
      .get(this.dailyUrl, options)
      .pipe(
        map((file) => {

          return this.utils.convertCsvToJson(file);

        })
      )
  }
}
