import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

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
