import { bootstrapApplication } from '@angular/platform-browser';
import { Amplify } from 'aws-amplify';
import { I18n } from 'aws-amplify/utils';

import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ptDict } from './assets/authenticator-dictionary/dictionary-ptbr';

I18n.putVocabularies({
  pt: ptDict,
});

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: 'us-east-2_E3SkAYCDa',
      userPoolClientId: '74v8a94mcrr5bqaqhehcq87q1d',
      identityPoolId: 'us-east-2:d58e793c-a018-4183-8857-09355eb32473',
      loginWith: {
        email: true,
        oauth: {
          domain: 'chatfy.auth.us-east-2.amazoncognito.com',
          scopes: ['openid', 'email', 'profile'],
          redirectSignIn: ['http://localhost:4200/private'],
          redirectSignOut: ['http://localhost:4200/login'],
          responseType: 'code',
        },
      },
      signUpVerificationMethod: 'code',
      userAttributes: {
        email: {
          required: true,
        },
      },
      allowGuestAccess: true,
      passwordFormat: {
        minLength: 8,
        requireLowercase: true,
        requireUppercase: true,
        requireNumbers: true,
        requireSpecialCharacters: true,
      },
    },
  },
});

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
