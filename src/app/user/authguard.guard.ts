import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataserviceService } from './dataservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

  constructor(private dataService: DataserviceService, private router: Router  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const routeurl: string = state.url;
      return this.isLogin(routeurl);
  }

  isLogin(routeurl: string) {
    if (this.dataService.isLoggedIn()) {
      return true;
    }
    this.dataService.redirectUrl = routeurl;
    this.router.navigate(['/login'], {queryParams: { returnUrl: routeurl }} );
  }

}
