import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ICredentials } from '@aws-amplify/core';
import Amplify, { Auth } from 'aws-amplify';
import * as AWS from 'aws-sdk';
import { CredentialsOptions } from 'aws-sdk/lib/credentials';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { LOCAL_KEY_LOGIN_TYPE, LOGIN_TYPE, SESSION_KEY_ACCESS_KEY } from '../constant';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn: BehaviorSubject<boolean>;
  password: string;
  credentials: ICredentials | CredentialsOptions;

  constructor(private router: Router) {
    this.loggedIn = new BehaviorSubject<boolean>(false);
  }

  public signIn(email, password, login): Observable<any> {
    if (login.type === LOGIN_TYPE.cognito) {
      Amplify.configure({
        Auth: {
          identityPoolId: login.identityPoolId,
          region: login.region,
          userPoolId: login.userPoolId,
          userPoolWebClientId: login.userPoolWebClientId,
        },
      });

      return from(Auth.signIn(email, password)).pipe(
        tap(c => {
          console.log(JSON.stringify(c));
          this.loggedIn.next(true);
        })
      );
    } else {
      sessionStorage[SESSION_KEY_ACCESS_KEY] = JSON.stringify({
        accessKeyId: email,
        secretAccessKey: password,
      });
      this.loggedIn.next(true);
      return new Observable(o => o.next());
    }
  }

  public isAuthenticated(): Observable<boolean> {
    if (localStorage[LOCAL_KEY_LOGIN_TYPE] === LOGIN_TYPE.cognito) {
      return from(Auth.currentAuthenticatedUser()).pipe(
        map(result => {
          this.loggedIn.next(true);
          return true;
        }),
        catchError(error => {
          this.loggedIn.next(false);
          return of(false);
        })
      );
    } else {
      if (sessionStorage[SESSION_KEY_ACCESS_KEY]) {
        this.loggedIn.next(true);
        return new Observable<boolean>(o => {
          o.next(true);
        });
      } else {
        this.loggedIn.next(false);
        return new Observable<boolean>(o => {
          o.next(false);
        });
      }
    }
  }

  public signOut() {
    this.credentials = null;

    if (localStorage[LOCAL_KEY_LOGIN_TYPE] === LOGIN_TYPE.cognito) {
      from(Auth.signOut()).subscribe(
        result => {
          this.loggedIn.next(false);
          this.router.navigate(['/login']);
        },
        error => console.log(error)
      );
    } else {
      sessionStorage.removeItem(SESSION_KEY_ACCESS_KEY);
      this.router.navigate(['/login']);
    }
  }

  async changePassword(oldPassword: string, newPassword: string) {
    const user = await Auth.currentAuthenticatedUser();
    return Auth.changePassword(user, oldPassword, newPassword);
  }

  async getCredentials(): Promise<ICredentials | CredentialsOptions> {
    if (localStorage[LOCAL_KEY_LOGIN_TYPE] === LOGIN_TYPE.cognito) {
      const c = await Auth.currentCredentials();
      console.log(c);
      return Auth.essentialCredentials(c);
    } else {
      const accessKey = JSON.parse(sessionStorage[SESSION_KEY_ACCESS_KEY]);
      return new AWS.Credentials({
        accessKeyId: accessKey.accessKeyId,
        secretAccessKey: accessKey.secretAccessKey,
      });
    }
  }
}
