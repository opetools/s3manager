import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';
import { LOCAL_KEY_LOGIN_INDEX, LOCAL_KEY_LOGIN_TYPE, LOCAL_KEY_REGION, LOGIN_TYPE } from '../constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  msg;
  loginForm;
  logins;

  form = {
    type: localStorage[LOCAL_KEY_LOGIN_INDEX] || '0',
    username: '',
    password: '',
  };

  patterns = {};

  placeholders = {};

  constructor(private router: Router, private auth: AuthService, private title: Title) {}
  ngOnInit() {
    this.logins = environment.logins;
    this.patterns[LOGIN_TYPE.cognito] = ['^.*$', '^^.*$'];
    this.patterns[LOGIN_TYPE.accessKey] = [
      '^(?<![A-Z0-9])[A-Z0-9]{20}(?![A-Z0-9])$',
      '^(?<![A-Za-z0-9/+=])[A-Za-z0-9/+=]{40}(?![A-Za-z0-9/+=])$',
    ];
    this.placeholders[LOGIN_TYPE.cognito] = ['Username', 'Password'];
    this.placeholders[LOGIN_TYPE.accessKey] = ['Access Key Id', 'Secret Access Key'];
  }

  onSubmitLogin() {
    const login = environment.logins[parseInt(this.form.type)];

    localStorage[LOCAL_KEY_LOGIN_INDEX] = this.form.type;
    localStorage[LOCAL_KEY_LOGIN_TYPE] = login.type;
    localStorage[LOCAL_KEY_REGION] = login.region;

    this.auth.signIn(this.form.username, this.form.password, login).subscribe(
      result => {
        console.log('login');
        this.router.navigate(['/']);
      },
      error => {
        console.log(error);
        this.msg = error.message;
      }
    );
  }
}
