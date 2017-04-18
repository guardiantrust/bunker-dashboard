import { Component, OnInit } from '@angular/core';
import { Company } from '../models/company';
import { CompanyService} from '../services/company.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: '../list/company-list.component.html'
})

export class CompanyComponent implements OnInit {
  title = 'Welcome to the Bunker!';
  motto = 'Plug-in. Plan. Produce.';
  companies: Observable<Company[]>;

  constructor( private _companyService: CompanyService  ) {}

  ngOnInit() {
    this._companyService.getCompanies()
    .subscribe(
      companies => {this.companies = companies; },
      error => { console.log(error); });

  };
}
