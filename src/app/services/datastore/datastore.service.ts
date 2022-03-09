import { Injectable } from '@angular/core';
import ArrayStore from 'devextreme/data/array_store';
import DataSource from 'devextreme/data/data_source';

@Injectable({
  providedIn: 'root'
})
export class DatastoreService {

  constructor() { }

  createDataStore: any = data => {

    return new DataSource({
      store: new ArrayStore({
        key: 'id',
        data: data
      }),
      paginate: true,
      pageSize: 25,
      requireTotalCount: true,
      filter: ['continent', '<>', null]
    })

  }

}
