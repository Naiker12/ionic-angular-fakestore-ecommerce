import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, ModalController } from '@ionic/angular';
import { ProductCart } from 'src/app/shared/interface/product-cart';
import { CartService } from 'src/app/shared/services/Cart.Service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  standalone : true,
  imports: [CommonModule, IonicModule],
})
export class CartComponent {
  cart: ProductCart[] = [];
  totalPrice: number = 0;
  cartItems: ProductCart[] = [];
  

  constructor(
    private cartService: CartService,
    private modalController: ModalController,
    private router: Router
  ) {}

  ngOnInit() {
    this.cartService.cart$.subscribe(cart => {
      this.cart = cart;
      this.calculateTotal();
    });
  }

  removeProduct(productId: number) {
    this.cartService.removeFromCart(productId);
    this.calculateTotal(); 
  }

  calculateTotal() {
    this.totalPrice = this.cart.reduce((total, product) => total + (product.price * product.quantity), 0);
  }

  clearCart() {
    this.cartService.clearCart();
    this.calculateTotal(); 
  }

  closeModal() {
    this.modalController.dismiss();
  }

  increaseQuantity(product: ProductCart) {
    product.quantity++;
    this.updateCart();
  }
  
  decreaseQuantity(product: ProductCart) {
    if (product.quantity > 1) {
      product.quantity--;
      this.updateCart();
    }
  }

  updateCart() {
    this.cartService.updateCart(this.cart);
    this.calculateTotal();
  }

  checkout() {
    this.closeModal();
    this.router.navigate(['/checkout']);
  }

  loadCart() {
    this.cartItems = this.cartService.getCartItems();
  }

  getTotal(): number {
    return this.cart.reduce((acc, product) => acc + (product.price * product.quantity), 0);
  }
  
  
}
