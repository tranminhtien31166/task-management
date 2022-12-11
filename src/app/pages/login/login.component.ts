import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public users = [
    { id: 1, name: "Trần Minh Tiến", avatar: "assets/images/user/tranminhtien.jpg", email: "tranminhtien31166@gmail.com" },
    { id: 2, name: "Thái Thủy Triều", avatar: "assets/images/user/thaithuytrieu.jpeg", email: "thaithuytrieu29081995@gmail.com" },
    { id: 3, name: "Phạm Duy Tín", avatar: "assets/images/user/phamduytin.jpg", email: "phamduytin311@gmail.com" }
  ]
  constructor(
    private _router: Router,
  ) { }

  ngOnInit(): void {
  }
  public goToHome() {
    this._router.navigate(['/task-manager']);
  }

}
