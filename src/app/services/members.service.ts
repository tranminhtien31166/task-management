import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModelUser } from '@app/models';

@Injectable({
    providedIn: 'root'
})

export class UsersService {
    private users = [
        { id: 1, name: "Trần Minh Tiến", avatar: "assets/images/user/tranminhtien.jpg", email: "tranminhtien31166@gmail.com" },
        { id: 2, name: "Thái Thủy Triều", avatar: "assets/images/user/thaithuytrieu.jpeg", email: "thaithuytrieu29081995@gmail.com" },
        { id: 3, name: "Phạm Duy Tín", avatar: "assets/images/user/phamduytin.jpg", email: "phamduytin311@gmail.com" }
    ]
    private _userListSubject: BehaviorSubject<ModelUser[]> = new BehaviorSubject<ModelUser[]>(this.users);
    public userList: Observable<ModelUser[]> = this._userListSubject.asObservable();
    constructor() { }
}
