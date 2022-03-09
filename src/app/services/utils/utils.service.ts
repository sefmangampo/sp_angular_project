import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { DatastoreService } from '../datastore/datastore.service';
@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private store: DatastoreService) { }


  parseLatestData: any = async (data: Observable<Object>) => {

    const val = await lastValueFrom(data)
    const arr = this.convertJsonToArray(val)
    return this.store.createDataStore(arr);
  }

  convertJsonToArray = (data: Object) => {
    const result = [] as any;

    let index = 0;

    for (let i in data) {
      data[i].id = index;
      data[i].code = i;
      result.push(data[i]);
      index++;
    }


    return result;
  }

  createDatasourceFromCSV = async data => {
    const val = await lastValueFrom(data);
    console.log('va', val)
    const store = this.store.createDataStore(val);

    return store;
  }

  convertCsvToJson = (csv: any) => {

    const lines = csv.split("\n");
    const result = [] as any;
    const headers = lines[0].split(",");

    for (let i = 1; i < lines.length; i++) {
      let obj = {}

      let currentLine = lines[i].split(",");

      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentLine[j];
      }

      result.push(obj);
    }

    return result;
  };
}
