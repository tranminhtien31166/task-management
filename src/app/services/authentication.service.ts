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
  public get currentUserValue(): ModelUser {
    return this._currentUserSubject.value;
  }

  public async login(data: ModelUser) {
    this._currentUserSubject.next(data)
    return true;
  }

  public logout(): void {
    this._currentUserSubject.next(null);
  }
}
