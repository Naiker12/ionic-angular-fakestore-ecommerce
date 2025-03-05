import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartService } from 'src/app/shared/services/Cart.Service';
import { PaymentData } from '../interface/PaymentData';


@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  private paymentDataSubject = new BehaviorSubject<PaymentData | null>(null);
  paymentData$ = this.paymentDataSubject.asObservable();

  constructor(private cartService: CartService) {}

  processPayment(paymentData: PaymentData) {
    console.log("Guardando en LocalStorage:", paymentData);
    localStorage.setItem('paymentReceipt', JSON.stringify(paymentData));
    this.paymentDataSubject.next(paymentData);
    this.cartService.clearCart();
  }
  
  getPaymentReceipt(): PaymentData | null {
    const data = localStorage.getItem('paymentReceipt');
    return data ? JSON.parse(data) : null;
  }
}
