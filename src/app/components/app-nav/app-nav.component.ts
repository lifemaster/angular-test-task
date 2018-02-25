import { Component, OnInit } from '@angular/core';

import { CookieService } from 'ngx-cookie';
import { AuthService } from '../../services/auth/auth.service';


@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this._authService.logout();
  }

}
