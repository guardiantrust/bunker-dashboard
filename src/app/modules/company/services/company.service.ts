import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router, NavigationStart } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Company } from '../models/company';
import { AppSettings, AuthenticationHeader} from '../../../global';

@Injectable()
export class CompanyService {
  private url = AppSettings.API_ENDPOINT + 'companies/';
  private serviceHeaders = AuthenticationHeader.forUser();

  constructor(private http: Http) { }


  getCompanies() {
    return this.http.get(this.url
      , { headers: this.serviceHeaders })
      .map(response => response.json());
  }

  getCompany(id: string) {
    const compiledURL = this.url  + id;
    return this.http.get(compiledURL  ,  { headers: this.serviceHeaders })
    .map(response => response.json());

  }
}
