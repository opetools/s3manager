import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  side;
  private componentRef;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.side = activatedRoute.snapshot.data.side;
  }

  ngOnInit() {}
  onActivate(event) {
    this.componentRef = event;
  }
}
