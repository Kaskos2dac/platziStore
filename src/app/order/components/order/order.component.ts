import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Product } from './../../../core/models/product.model';
import { CartService } from './../../../core/services/cart.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  products$: Observable<Product[]>;
  emailField: FormControl;

  constructor(private cartService: CartService) {
    this.products$ = this.cartService.cart$;
    this.emailField = new FormControl('', [Validators.required, Validators.email]);
  }

  ngOnInit() {}

  sendMail() {
    if (this.emailField.valid) {
      console.log(this.emailField.value);
    }
  }
}
