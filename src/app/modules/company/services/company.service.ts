import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router, NavigationStart } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Company } from '../models/company'
import myGlobals = require('globals');

@Injectable()
export class CompanyService {
    constructor(private http: Http) { }
    private url = myGlobals.url + "companies";

    getCompany(id: string) {
        return this.http.get(this.url + "/" + id, {headers: myGlobals.headers })
        .map(response => response.json().data as Company);

    }
}