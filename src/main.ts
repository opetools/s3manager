import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import Amplify from 'aws-amplify';
import { AppModule } from './app/app.module';
import { LOCAL_KEY_LOGIN_INDEX, LOCAL_KEY_LOGIN_TYPE, LOGIN_TYPE } from './app/constant';
import { environment } from './environments/environment';

if (localStorage[LOCAL_KEY_LOGIN_TYPE] == LOGIN_TYPE.cognito) {
  const i = parseInt(localStorage[LOCAL_KEY_LOGIN_INDEX]);

  Amplify.configure({
    Auth: {
      identityPoolId: environment.logins[i].identityPoolId,
      region: environment.logins[i].region,
      userPoolId: environment.logins[i].userPoolId,
      userPoolWebClientId: environment.logins[i].userPoolWebClientId,
    },
  });
}

if (environment.production) {
  enableProdMode();

  if (window) {
    window.console.log = () => {};
  }
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
