import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import GlobalService from './globalService';
import {environment} from '../../environments/environment';

@Injectable()
export class AddressService extends GlobalService {

  url_addresses = environment.url_base_api + environment.paths_api.address;

  constructor(public http: HttpClient) {
    super();
  }


  getAddresses(): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get<any>(
      this.url_addresses,
      {headers: headers}
    );
  }
}
