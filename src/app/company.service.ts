import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Company } from './models/company';

@Injectable()
export class CompanyService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private companiesURL = 'http://localhost:5050/v1/api/companies';

    constructor(private http: Http){ }

    getCompanies(): Promise<Company[]>{
        return this.http.get(this.companiesURL)
        .toPromise()
        .then(response => response.json().data as Company[])
        .catch(this.handleError);
    }

    getCompany(id: number): Promise<Company> {
        const  url = '${this.companiesURL}/${id}';
        return this.http.get(url)
        .toPromise()
        .then(response => response.json().data as Company)
        .catch(this.handleError);
    }

    updateCompany(id: string, company: Company): Promise<Company>{
        const url = '${this.companiesURL}/${id}';
        return this.http.put(url, JSON.stringify(company), {headers: this.headers})
        .toPromise()
        .then(() => company)
        .catch(this.handleError);
    }

    insertCompany(company: Company): Promise<Company> {
        return this.http.post(this.companiesURL, JSON.stringify(company), {headers: this.headers})
        .toPromise()
        .then(res =>  res.json().data as Company)
        .catch(this.handleError);
    }


    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
    }
}