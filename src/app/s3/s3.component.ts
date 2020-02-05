import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import filesize from 'filesize';
import { S3Service } from '../aws/s3.service';

@Component({
  selector: 'app-s3',
  templateUrl: './s3.component.html',
  styleUrls: ['./s3.component.scss'],
})
export class S3Component implements OnInit {
  columns = [
    { field: 'Key', label: 'Name', sort: 0, filter: '', width: 0 },
    { field: 'Size', label: 'Size', sort: 0, filter: '', width: 100 },
    { field: 'LastModified', label: 'LastModified', sort: 0, filter: '', width: 160 },
    // { field: 'StorageClass', label: 'StorageClass', sort: 0, filter: '', width: 140 },
  ];

  loading = true;
  contents: AWS.S3.Object[] = [];
  selected: AWS.S3.Object[] = [];

  param;
  bucket;
  display;
  bprefix;

  prefix;
  breadcrumb = [];
  file;
  folder = '';
  isOpen = false;

  // downBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;
  // upBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;

  constructor(private s3s: S3Service, private route: ActivatedRoute, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };

    console.log(route);
    this.param = this.route.snapshot.paramMap.get('bucket');
    if (this.param) {
      this.bucket = this.param.split(',')[0];
      this.bprefix = this.param.split(',')[1] || '';
      this.display = this.param.split(',')[2] || this.bucket + (this.bprefix ? '/' + this.bprefix : '');
    }
    this.prefix = this.route.snapshot.paramMap.get('prefix');

    console.log(this.bucket);
    console.log(this.prefix);
    console.log(this.bprefix);
    console.log(this.display);
    console.log(this.breadcrumb);
  }

  async ngOnInit() {
    this.contents = [];
    this.selected = [];

    if (this.bucket) {
      const prefix = this.prefix || this.bprefix;
      this.loading = true;
      const data = await this.s3s.listObjectsV2({ Bucket: this.bucket, Delimiter: '/', Prefix: prefix });
      console.log(data);
      data.CommonPrefixes.forEach(d => {
        this.contents.push({ Key: d.Prefix });
      });
      data.Contents = data.Contents.filter(d => prefix !== d.Key);
      this.contents = this.contents.concat(data.Contents);
      this.loading = false;
      this.setBreadcrumb();
    }
  }

  download(key) {
    console.log(key);
    // this.s3s.getObject({ Bucket: this.bucket, Key: key });
    this.s3s.getSignedUrl({ Bucket: this.bucket, Key: key }, this.basename(key));
  }

  async upload(fl: FileList) {
    console.log(fl);

    if (fl.length <= 0) {
      return;
    }

    for (let i = 0; i < fl.length; i++) {
      await this.s3s.upload({
        Bucket: this.bucket,
        Key: this.pwd() + fl[i].name,
        Body: fl[i],
      });
    }
    this.ngOnInit();
  }

  pwd() {
    const p = this.prefix || this.bprefix || '';
    if (p.includes('/')) {
      return (
        p
          .split('/')
          .slice(0, -1)
          .join('/') + '/'
      );
    }
    return '';
  }

  async createFolder() {
    const ret = await this.s3s.putObject({
      Bucket: this.bucket,
      Key: this.pwd() + this.folder + '/',
    });
    this.folder = '';
    this.ngOnInit();
  }

  dlSelected() {
    this.selected.forEach(c => {
      this.download(c.Key);
    });
  }

  refresh() {
    this.ngOnInit();
  }

  async delete() {
    const ret = await this.s3s.deleteObjects({
      Bucket: this.bucket,
      Delete: {
        Objects: this.selected.map(x => ({ Key: x.Key })),
      },
    });
    this.isOpen = false;
    this.ngOnInit();
  }

  basename(path) {
    return path.replace(/.*\//, '');
  }
  dirname(path) {
    // return path.replace(this.prefix || this.bprefix, '');
    if (path.slice(-1) === '/') {
      return path.split('/').slice(-2)[0] + '/';
    } else if (!this.prefix && this.bprefix && this.bprefix.includes('/')) {
      const p = this.bprefix.replace(/\/.*/, '');
      return path.replace(p + '/', '');
    }

    return path.replace(this.prefix, '');
  }
  filesize(value) {
    if (isNaN(value)) {
      return '--';
    }
    return filesize(value);
  }

  setBreadcrumb() {
    this.breadcrumb = [];
    if (!this.prefix) {
      return;
    }

    let p = '';
    let b = this.bprefix || '';
    if (b.includes('/')) {
      b = this.bprefix.substring(0, this.bprefix.lastIndexOf('/') + 1);
    }
    console.log(b);
    this.prefix
      .replace(b, '')
      .split('/')
      .slice(0, -1)
      .forEach(e => {
        p = p + e + '/';
        this.breadcrumb.push({ name: e, link: ['/s3', this.param, b + p] });
      });
  }

  clearSort() {
    this.columns.forEach(c => (c.sort = 0));
  }

  clearFilter() {
    this.columns.forEach(c => (c.filter = ''));
  }
}
