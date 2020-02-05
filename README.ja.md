# S3 Manager

[![Build Status](https://travis-ci.com/opetools/s3manager.svg?branch=master)](https://travis-ci.com/opetools/s3manager)

Angular 8 を使用した Amazon S3 ファイルブラウザ

[English](./README.md) | 日本語

## デモサイト

## 特徴

- Cognito または AccessKey による認証をサポート
- S3 バケット内のファイルリスト表示
- 複数ファイルのアップロード/ダウンロード/削除
- ショートカットの設定
- フォルダの作成

## セットアップ

### Amazon S3

- バケット作成
- アプリからバケットを操作するために [CORS](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/cors.html) を設定

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

- ユーザープールと ID プールを作成
- グループに割り当てる IAM Role を作成
- グループとユーザーを作成

[チュートリアル](https://docs.aws.amazon.com/cognito/latest/developerguide/tutorials.html)

## インストール

- プロジェクトコピー

```sh
git clone https://github.com/opetools/s3manager.git
cd s3manager
```

- enviroment ファイル編集(src/enviroments/)

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

- アプリ実行

```sh
npm install
ng serve
```

http://localhost:4200/
