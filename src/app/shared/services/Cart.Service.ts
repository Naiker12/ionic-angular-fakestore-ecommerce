import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductCart } from '../interface/product-cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartKey = 'cartItems';
  private cart: ProductCart[] = this.loadCart();
  private cartSubject = new BehaviorSubject<ProductCart[]>(this.cart);

  cart$ = this.cartSubject.asObservable();


  private loadCart(): ProductCart[] {
    const savedCart = localStorage.getItem(this.cartKey);
    return savedCart ? JSON.parse(savedCart) : [];
  }


  private saveCart(): void {
    localStorage.setItem(this.cartKey, JSON.stringify(this.cart));
    this.cartSubject.next(this.cart);
  }


  getCart(): ProductCart[] {
    return this.cart;
  }

  addToCart(product: ProductCart) {
    let existingProduct = this.cart.find(p => p.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 }); 
    }

    this.saveCart(); 
  }


  removeFromCart(productId: number): void {
    this.cart = this.cart.filter(p => p.id !== productId);
    this.saveCart();
  }


  clearCart(): void {
    this.cart = [];
    this.saveCart();
  }


  updateCart(updatedCart: ProductCart[]) {
    this.cart = updatedCart;
    this.saveCart();
  }

 
  getCartItems(): ProductCart[] {
    return this.cart;
  }
  
}
