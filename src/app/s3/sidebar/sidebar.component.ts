import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LOCAL_KEY_BUCKETS } from 'src/app/constant';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class S3SidebarComponent implements OnInit {
  buckets: Set<string>;
  bucketa;
  prefix = '';
  display = '';
  bucketr;
  bucketPattern = '^[a-z0-9.-]{3,63}$';

  constructor(private activatedRoute: ActivatedRoute) {
    if (activatedRoute.snapshot.data.buckets) {
      this.buckets = activatedRoute.snapshot.data.buckets;
    }
  }
  ngOnInit() {
    this.buckets = new Set<string>(JSON.parse(localStorage[LOCAL_KEY_BUCKETS] || '[]'));
  }

  addBucket() {
    const buckets = new Set<string>(JSON.parse(localStorage[LOCAL_KEY_BUCKETS] || '[]'));
    buckets.add(this.bucketa + ',' + this.prefix + ',' + this.display);
    console.log(buckets);
    localStorage[LOCAL_KEY_BUCKETS] = JSON.stringify(Array.from(buckets));
    this.buckets = buckets;
    this.bucketa = '';
    this.prefix = '';
    this.display = '';
  }

  removeBucket() {
    console.log(this.bucketr);
    const buckets = new Set<string>(JSON.parse(localStorage[LOCAL_KEY_BUCKETS] || '[]'));
    buckets.delete(this.bucketr);
    localStorage[LOCAL_KEY_BUCKETS] = JSON.stringify(Array.from(buckets));
    this.buckets = buckets;
  }

  disp(bucket) {
    const b = bucket.split(',');
    return b[2] || b[0] + (b[1] ? '/' + b[1] : '');
  }
}
