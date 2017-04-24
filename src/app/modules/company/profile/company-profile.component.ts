import { Component, OnInit } from '@angular/core';
import { Company } from '../models/company';
import { CompanyService} from '../services/company.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: '../profile/company-profile.component.html'
})

export class CompanyProfileComponent implements OnInit {

  company = new Company();

  constructor( private _companyService: CompanyService  ) {}

  ngOnInit() {
    this._companyService.getCompany()
    .subscribe(
      company => {this.company = company; },
      error => { console.log(error); });

  };

}
