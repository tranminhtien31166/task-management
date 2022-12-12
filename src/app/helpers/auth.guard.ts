import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ModelUser } from '@app/models';
import { AuthenticationService } from '@app/services';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    public currentUser: ModelUser;
    constructor(
        private _router: Router,
        private _authenticationService: AuthenticationService
    ) {
        this._authenticationService.currentUser.subscribe(user => this.currentUser = user);
    }

    ngOnInit(): void {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let currentUser = this._authenticationService.currentUserValue();
        if (currentUser && currentUser.id) {
            return true;
        }
        else {
            this._authenticationService.logout();
            this._router.navigate(['/login']);
            return false;
        }
    }
}
