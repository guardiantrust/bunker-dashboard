import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router, NavigationStart } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Company } from '../models/company';
import { AppSettings, AuthenticationHeader} from '../../../global';

@Injectable()
export class CompanyService {
  private url = AppSettings.API_ENDPOINT + '/companies';
  private serviceHeaders = AuthenticationHeader.forUser();

  constructor(private http: Http) { }

  getCompany() {
    return this.http.get(this.url
      , { headers: this.serviceHeaders })
      .map(response => response.json().data as Company);

  }
}
