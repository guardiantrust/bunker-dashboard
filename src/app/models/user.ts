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

export class LoginUser {
  companyID: string;
  userID: string;
  exp: number;
  iat: number;
  token: string;
}