import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { CookieService } from 'ngx-cookie';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class PrivateRoutesGuard implements CanActivate {
  constructor(private _router: Router, private _authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isAuthorized = this._authService.isAuthorized();

    if (!isAuthorized) {
      this._router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }
}
