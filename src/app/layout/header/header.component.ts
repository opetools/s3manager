import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/auth/auth.service';
import { LOCAL_KEY_LOGIN_TYPE, LOGIN_TYPE } from 'src/app/constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  oldPassword;
  newPassword;
  confirmPassword;
  msg;
  pmodal;

  constructor(private auth: AuthService, private title: Title) {}

  ngOnInit() {}

  logout() {
    this.auth.signOut();
  }

  changePassword() {
    if (this.newPassword !== this.confirmPassword) {
      this.msg = "Password confirmation doesn't match the password";
      return;
    }

    this.auth
      .changePassword(this.oldPassword, this.newPassword)
      .then(d => {
        this.close();
      })
      .catch(e => {
        this.msg = e.message;
      });
  }

  pass() {
    return localStorage[LOCAL_KEY_LOGIN_TYPE] === LOGIN_TYPE.cognito;
  }

  close() {
    this.pmodal = false;
    this.oldPassword = '';
    this.newPassword = '';
    this.confirmPassword = '';
    this.msg = '';
  }
}
