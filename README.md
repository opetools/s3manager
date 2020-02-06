# S3 Manager

[![Build Status](https://travis-ci.com/opetools/s3manager.svg?branch=master)](https://travis-ci.com/opetools/s3manager)

Amazon S3 file browser with Angular 8

English | [日本語](./README.ja.md)

## Demo

Live demo: https://opetools.github.io/s3manager

admin/password

## Features

- Supports Cognito or AccessKey authentication
- Display file list in S3 bucket
- Upload / download / delete multiple files
- Shortcut settings
- Create folder

## Setup

### Amazon S3

- Create bucket
- Set [CORS](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/cors.html) to operate the bucket from the app

```xml
<?xml version="1.0" encoding="UTF-8"?>
<CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
<CORSRule>
    <AllowedOrigin>*</AllowedOrigin>
    <AllowedMethod>HEAD</AllowedMethod>
    <AllowedMethod>GET</AllowedMethod>
    <AllowedMethod>POST</AllowedMethod>
    <AllowedMethod>PUT</AllowedMethod>
    <AllowedMethod>DELETE</AllowedMethod>
    <MaxAgeSeconds>3000</MaxAgeSeconds>
    <AllowedHeader>*</AllowedHeader>
    <ExposeHeader>ETag</ExposeHeader>
</CORSRule>
</CORSConfiguration>
```

### Amazon Cognito

(checking)

- Create user pool and ID pool
- Create IAM Role to assign to group
- Create groups and users

[Tutorial](https://docs.aws.amazon.com/cognito/latest/developerguide/tutorials.html)

### Install

```sh
git clone https://github.com/opetools/s3manager.git
cd s3manager
```

- Edit environment file(src/enviroments/)

```ts
export const environment = {
  production: false,
  title: 'S3 Manager',
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
```

- Run app

```sh
npm install
ng serve
```

http://localhost:4200/
