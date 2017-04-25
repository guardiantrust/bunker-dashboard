import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from '../models/company';
import { CompanyService} from '../services/company.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: '../profile/company-profile.component.html'
})

export class CompanyProfileComponent implements OnInit {

  company = new Company();
  id: string;
  constructor( private _companyService: CompanyService, 
  private router: ActivatedRoute  ) {
    router.params.subscribe(params => this.id = params['id']);

  }

  ngOnInit() {
    
    
    this._companyService.getCompany(this.id)
    .subscribe(
      company => {this.company = company; },
      error => { console.log(error); });

  };

}
