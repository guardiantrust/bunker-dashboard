'use strict';

import { Http, Headers} from '@angular/http';

export class AppSettings {
  public static API_ENDPOINT='http://localhost:5050/api/v1/'
}

export class AuthenticationHeader{
  public  static forUser(): Headers {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }
}
