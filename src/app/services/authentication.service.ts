import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { Response } from '@app/_models';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Tokens, User } from '@app/models';
// import { List } from 'linq-typescript';
// import { environment } from '@environments/environment';
// import { JWT_TOKEN,REFRESH_TOKEN, CURRENT_USER, ORG_MENU, MENU, LIST_BRANCH } from '@app/_constant';
import _remove from 'lodash/remove';
import _clone from 'lodash/clone';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('CURRENT_USER')));
  public currentUser = this._currentUserSubject.asObservable();

  constructor(
    private _http: HttpClient,
    private _router: Router,
  ) {

  }

  public get currentUserValue(): User {
    return this._currentUserSubject.value;
  }

  // public getJwtToken(): any {
  //   return localStorage.getItem(JWT_TOKEN);
  // }

  // public isLoggedIn(): boolean {
  //   return !!this.getJwtToken();
  // }

  public async login(username: string, password: string){
    return;
    // let dataLogin = await this._http.post<Response<any>>(`${environment.apiUrl}/${environment.apiVersion1}/account/login`, { username, password  }).toPromise();
    
    // let cloneOriginMenu =  _clone(dataLogin.data.menus);
    // let menuPage = _remove(cloneOriginMenu, function(menu) { return !menu.parent_id; });
    // menuPage.map((parent)=>{
    //   let childrenMenu = _remove(cloneOriginMenu, function(menu) { return menu.parent_id == parent.id});
    //   parent.menus = childrenMenu;
    // })
    
    // localStorage.setItem(CURRENT_USER, JSON.stringify(dataLogin.data.user_info));
    // localStorage.setItem(ORG_MENU, JSON.stringify(dataLogin.data.menus));
    // localStorage.setItem(MENU, JSON.stringify(menuPage));
    // this._storeTokens({ jwt: dataLogin.data.token, refresh_token: '' });
    
    // let dataBranch = await this._http.get<Response<any>>(`${environment.apiUrl}/${environment.apiVersion1}/category/branch`, { params: {} }).toPromise();
    // localStorage.setItem(LIST_BRANCH, JSON.stringify(dataBranch));
    
    // this._currentUserSubject.next(dataLogin.data.user_info);
    // this._listBranchSubject.next(dataBranch);

    // return dataLogin;
  }

  public logout(): void {
    // remove user from local storage and set current user to null
    this._currentUserSubject.next(null!);
    this._removeStorage();
  }

  public refreshToken(): any {
    return;
    // return this._http.get<any>(`${environment.apiUrl}/${environment.apiVersion1}/account/${this._getRefreshToken()}/refresh`)
    //   .pipe(tap((tokens: any) => {
    //     localStorage.setItem(JWT_TOKEN, tokens.jwt);
    //   }, error => {
    //     this.logout();
    //     this._router.navigate(['login']);
    //   }));
  }


  private _removeStorage(): void {
    return;
    // localStorage.removeItem(MENU);
    // localStorage.removeItem(ORG_MENU);
    // localStorage.removeItem(CURRENT_USER);
    // localStorage.removeItem(JWT_TOKEN);
    // localStorage.removeItem(REFRESH_TOKEN);
    // localStorage.removeItem(LIST_BRANCH);
  }

}
