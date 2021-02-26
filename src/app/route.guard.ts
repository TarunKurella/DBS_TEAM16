import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {
  canActivate():boolean
  {
    const result=localStorage.getItem('token');
    if(result==undefined)
    {
      alert("login to continue");
      return false;
    }
    return true;
  }
}
