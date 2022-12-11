import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModelUser } from '@app/models';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  private _currentUserSubject: BehaviorSubject<ModelUser> = new BehaviorSubject<ModelUser>(null);
  public currentUser: Observable<ModelUser> = this._currentUserSubject.asObservable();

  constructor() {

  }
  public currentUserValue() {
    let currentUser = JSON.parse(localStorage.getItem('CURRENT_USER'));
    if (currentUser && currentUser.id) {
      this._currentUserSubject.next(currentUser)
      return currentUser
    }
    else return null
  }

  public async login(data: ModelUser) {
    localStorage.setItem('CURRENT_USER', JSON.stringify(data));
    this._currentUserSubject.next(data)
    return true;
  }

  public logout(): void {
    this._currentUserSubject.next(null);
    localStorage.removeItem('CURRENT_USER');
  }
}
