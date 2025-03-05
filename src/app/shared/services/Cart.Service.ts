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

  /** Carga el carrito desde localStorage */
  private loadCart(): ProductCart[] {
    const savedCart = localStorage.getItem(this.cartKey);
    return savedCart ? JSON.parse(savedCart) : [];
  }

  /** Guarda el carrito en localStorage */
  private saveCart(): void {
    localStorage.setItem(this.cartKey, JSON.stringify(this.cart));
    this.cartSubject.next(this.cart);
  }

  /** Obtiene el carrito */
  getCart(): ProductCart[] {
    return this.cart;
  }

  /** Agrega un producto al carrito */
  addToCart(product: ProductCart) {
    let existingProduct = this.cart.find(p => p.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1; // Aumentar cantidad
    } else {
      this.cart.push({ ...product, quantity: 1 }); // Asegurar cantidad inicial
    }

    this.saveCart(); // Guardar carrito actualizado
  }

  /** Elimina un producto del carrito */
  removeFromCart(productId: number): void {
    this.cart = this.cart.filter(p => p.id !== productId);
    this.saveCart();
  }

  /** Vacía el carrito */
  clearCart(): void {
    this.cart = [];
    this.saveCart();
  }

  /** Actualiza el carrito con una nueva lista */
  updateCart(updatedCart: ProductCart[]) {
    this.cart = updatedCart;
    this.saveCart();
  }

  /** Obtiene los productos del carrito */
  getCartItems(): ProductCart[] {
    return this.cart;
  }
}
