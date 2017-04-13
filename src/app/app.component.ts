import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to the Bunker!';
  motto = 'Plug-in. Plan. Produce.';
}

export class Company {
  ID: string;
  Name: string;
  Address1:string;
  Address2:string;
  City: string;
  Postal: string;
  PhoneNumber: string;
  ContactEmail: string;
  IsSuspended: boolean;
  IsActive: boolean;
}

export class User {
  ID: string;
  FirstName: string;
  LastName: string;
  Email: string;
  PhoneNumber: string;
  Username: string;
  Userlevel: number;
  IsActive: boolean;
  SMS: string;
  Created: string;
  CompanyID: string;
}




