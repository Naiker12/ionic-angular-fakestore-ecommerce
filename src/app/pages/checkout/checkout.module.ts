import { NgModule } from '@angular/core';
import { CheckoutPageRoutingModule } from './checkout-routing.module';
import { CheckoutPage } from './checkout.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CheckoutPageRoutingModule,
    SharedModule
  ],
  declarations: [CheckoutPage]
})
export class CheckoutPageModule {}
