import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { CartService } from './../../../core/services/cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMobile: boolean;
  observerSubscription: Subscription;

  total$: Observable<number>;

  constructor(private cartService: CartService, public breakpointObserver: BreakpointObserver) {
    this.total$ = this.cartService.cart$.pipe(map(products => products.length));

    // breakpoint

    this.observerSubscription = breakpointObserver.observe([Breakpoints.Web, Breakpoints.Tablet]).subscribe((result: BreakpointState) => {
      this.isMobile = !result.matches;
      console.log('is mobile :' + this.isMobile);
    });
  }

  ngOnInit() {}
}

