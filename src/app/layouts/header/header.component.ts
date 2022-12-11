import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/services';
import { ModelUser } from '@app/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  public currentUser: ModelUser;
  constructor(
    private _router: Router,
    private _authenticationService: AuthenticationService,
  ) {
    // this._authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {
    this._authenticationService.currentUser.subscribe(user => this.currentUser = user);
  }

  public logout() {
    this._authenticationService.logout();
    this._router.navigate(['login']);
  }
}
