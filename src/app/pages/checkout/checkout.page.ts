import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/Cart.Service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
  standalone: false
})
export class CheckoutPage implements OnInit {
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cart$.subscribe(cart => {
      this.total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    });
  }
}
