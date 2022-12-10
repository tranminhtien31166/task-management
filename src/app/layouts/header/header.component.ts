import { Component, OnInit } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {


  constructor(
    private _router: Router,
  ) {
    // this._authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {
    // this._getWorkingDate();
  }

  public logout() {
    this._router.navigate(['login']);
  }
}
