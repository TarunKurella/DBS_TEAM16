import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  isuserloggedin()
  {
    if(localStorage.getItem('token')==undefined)
    {
      return false;
    }
    else
    return true;
  }
}
