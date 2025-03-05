import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PaymentData } from 'src/app/shared/interface/PaymentData';
import { CartService } from 'src/app/shared/services/Cart.Service';
import { CheckoutService } from 'src/app/shared/services/checkout.service';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  standalone: false
})
export class CheckoutComponent {
  checkoutForm: FormGroup;
  total: number = 0;

  constructor(
    private fb: FormBuilder,
    private checkoutService: CheckoutService,
    private cartService: CartService,
    private router: Router
  ) {
    this.checkoutForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      bankAccount: ['', [Validators.required, Validators.pattern('^[0-9]{10,16}$')]],
      cvc: ['', [Validators.required, Validators.pattern('^[0-9]{3}$')]],
      dueDate: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.cartService.cart$.subscribe(cart => {
      this.total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    });
  }

  submitForm() {
    if (this.checkoutForm.valid) {
      const paymentData: PaymentData = {
        ...this.checkoutForm.value,
        total: this.total,
        cart: this.cartService.getCartItems(),
      };
  
      this.checkoutService.processPayment(paymentData);
      
      // Forzar recarga de la página de recibo
      this.router.navigate(['/receipt']).then(() => {
        window.location.reload();
      });
    }
  }
}
