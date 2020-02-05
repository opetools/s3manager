import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk';
import {
  CommonPrefix,
  DeleteObjectsOutput,
  DeleteObjectsRequest,
  GetObjectOutput,
  GetObjectRequest,
  ListObjectsV2Request,
  ManagedUpload,
  ObjectList,
  PutObjectOutput,
  PutObjectRequest,
} from 'aws-sdk/clients/s3';
import { AlertService } from '../alert/alert.service';
import { AuthService } from '../auth/auth.service';
import { LOCAL_KEY_REGION } from '../constant';

@Injectable({
  providedIn: 'root',
})
export class S3Service {
  constructor(private auth: AuthService, private alert: AlertService) {}

  async s3(): Promise<AWS.S3> {
    return new AWS.S3({
      region: localStorage[LOCAL_KEY_REGION],
      credentials: await this.auth.getCredentials(),
      maxRetries: 0,
    });
  }

  async listObjectsV2(params: ListObjectsV2Request): Promise<S3Result> {
    const result: S3Result = {
      Contents: [],
      CommonPrefixes: [],
    };
    try {
      while (true) {
        const output = await (await this.s3()).listObjectsV2(params).promise();
        console.log(output);
        result.Contents = result.Contents.concat(output.Contents);
        result.CommonPrefixes = result.CommonPrefixes.concat(output.CommonPrefixes);
        if (output.IsTruncated) {
          params.ContinuationToken = output.NextContinuationToken;
        } else {
          break;
        }
      }
    } catch (e) {
      this.alert.danger(e.message || e.code);
    }
    return result;
  }

  async getObject(params: GetObjectRequest): Promise<GetObjectOutput> {
    let ret;
    try {
      ret = await (await this.s3()).getObject(params).promise();
      console.log(ret);
    } catch (e) {
      this.alert.danger(e.message || e.code);
    }
    return ret;
  }

  async getSignedUrl(params, name) {
    try {
      const signedUrl = (await this.s3()).getSignedUrl('getObject', params);
      console.log(signedUrl);

      const res = await fetch(signedUrl);
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      document.body.appendChild(a);
      a.href = url;
      a.download = name;
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (e) {
      this.alert.danger(e.message || e.code);
    }
  }

  async upload(
    params: PutObjectRequest,
    options?: ManagedUpload.ManagedUploadOptions,
    listener: (progress: ManagedUpload.Progress) => void = p => {
      console.log(p);
    }
  ): Promise<ManagedUpload.SendData> {
    let ret;
    try {
      ret = await (await this.s3())
        .upload(params, options)
        .on('httpUploadProgress', listener)
        .promise();
      console.log(ret);
    } catch (e) {
      this.alert.danger(e.message || e.code);
    }
    return ret;
  }

  async putObject(params: PutObjectRequest): Promise<PutObjectOutput> {
    let ret;
    try {
      ret = await (await this.s3()).putObject(params).promise();
      console.log(ret);
    } catch (e) {
      this.alert.danger(e.message || e.code);
    }
    return ret;
  }

  async deleteObjects(params: DeleteObjectsRequest): Promise<DeleteObjectsOutput> {
    let ret;
    try {
      ret = await (await this.s3()).deleteObjects(params).promise();
      console.log(ret);
    } catch (e) {
      this.alert.danger(e.message || e.code);
    }
    return ret;
  }
}

export interface S3Result {
  Contents: ObjectList;
  CommonPrefixes: CommonPrefix[];
}
