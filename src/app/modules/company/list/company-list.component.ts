import { Component, OnInit } from '@angular/core';
import { Company } from '../models/company';
import { CompanyService} from '../services/company.service';


@Component({
  selector: 'app-root',
  templateUrl: '../list/company-list.component.html'
})

export class CompanyComponent implements OnInit {
  companies: Company[] = [];

  title = 'Welcome to the Bunker!';
  motto = 'Plug-in. Plan. Produce.';

  ngOnInit() {


  };
}
