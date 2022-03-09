import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';
import { UtilsService } from '../utils/utils.service';
@Injectable({
  providedIn: 'root'
})
export class CovidService {

  private latestUrl = 'https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/latest/owid-covid-latest.json'
  private dailyUrl = 'https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/owid-covid-data.csv'

  constructor(private http: HttpClient, private utils: UtilsService) { }

  async getLatestData() {
    const data = this.http.get(this.latestUrl)
    const store = await this.utils.parseLatestData(data)
    return store;
  }

  async getHistoricalData(): Promise<void> {
    let headers = new HttpHeaders({ Accept: 'text/csv' });
    const options: {
      headers?: HttpHeaders;
      observe?: 'body';
      params?: HttpParams;
      reportProgress?: boolean,
      responseType: 'text',
      withCredentials?: boolean
    } = {
      headers: headers,
      responseType: 'text'
    };


    const data = this.http.get(this.dailyUrl, options);
    const ds = await this.utils.createDatasourceFromCSV(data);

    console.log(ds)


  }
}
