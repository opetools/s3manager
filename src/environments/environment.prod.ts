import { LOGIN_TYPE } from 'src/app/constant';

export const environment = {
  production: true,
  title: 'S3 Manager',
  logins: [
    {
      type: LOGIN_TYPE.cognito,
      name: 'Amazon Cognito',
      region: 'ap-northeast-1',
      identityPoolId: 'ap-northeast-1:',
      userPoolId: 'ap-northeast-1_xxxxxx',
      userPoolWebClientId: 'xxxxxx',
    },
    {
      type: LOGIN_TYPE.accessKey,
      name: 'AWS Access Key',
      region: 'ap-northeast-1',
    },
  ],
};
