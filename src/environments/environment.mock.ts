export const environment = {
  production: true,
  title: '[Demo]S3 Manager',
  logins: [
    {
      type: LOGIN_TYPE.cognito,
      name: 'Amazon Cognito',
      region: 'ap-northeast-1',
      identityPoolId: 'ap-northeast-1:',
      userPoolId: 'ap-northeast-1_xxxxx',
      userPoolWebClientId: 'xxxxxx',
    },
    {
      type: LOGIN_TYPE.accessKey,
      name: 'AWS Access Key',
      region: 'ap-northeast-1',
    },
  ],
};

import { Auth } from 'aws-amplify';
import * as AWS from 'aws-sdk';
import * as sinon from 'sinon';
import { LOCAL_KEY_BUCKETS, LOGIN_TYPE } from 'src/app/constant';
import changePassword from '../mocks/auth/changePassword.json';
import currentCredentials from '../mocks/auth/currentCredentials.json';
import signIn from '../mocks/auth/signIn.json';
import deleteObjects from '../mocks/s3/deleteObjects.json';
import listObjectsV2 from '../mocks/s3/listObjectsV2.json';
import putObject from '../mocks/s3/putObject.json';
import upload from '../mocks/s3/upload.json';

const stub = sinon.stub();
Object.keys(listObjectsV2).forEach(e => {
  const v = e.split(',');
  stub.withArgs({ Bucket: v[0], Delimiter: '/', Prefix: v[1] }).returns({ promise: () => listObjectsV2[e] });
});
AWS.S3.prototype.listObjectsV2 = stub;

AWS.S3.ManagedUpload = sinon.stub().returns({ promise: () => upload, constructor: () => {} });
AWS.S3.prototype.upload = sinon.stub().returns({ on: (event, listener) => new AWS.S3.ManagedUpload({}) });
AWS.S3.prototype.putObject = sinon.stub().returns({ promise: () => putObject });
AWS.S3.prototype.deleteObjects = sinon.stub().returns({ promise: () => deleteObjects });
AWS.S3.prototype.getSignedUrl = sinon.stub().returns('https://github.githubassets.com/images/modules/logos_page/Octocat.png');

const si = sinon.stub();
si.withArgs('admin', 'passowrd').returns(Promise.resolve(signIn));
Auth.signIn = si;
Auth.currentAuthenticatedUser = sinon.stub().returns(Promise.resolve(signIn));
Auth.currentCredentials = sinon.stub().returns(Promise.resolve(currentCredentials));
Auth.changePassword = sinon.stub().returns(Promise.resolve(changePassword));

const buckets = new Set<string>();
buckets.add('cloudtrail-sample-bucket,,');
buckets.add('cloudtrail-sample-bucket,AWSLogs/169271423270/CloudTrail/,regions');
buckets.add('cloudtrail-sample-bucket,AWSLogs/169271423270/CloudTrail/ap-northeast-1/2020/01/12/,ap-northeast-1/2020/01/12');
localStorage[LOCAL_KEY_BUCKETS] = JSON.stringify(Array.from(buckets));
