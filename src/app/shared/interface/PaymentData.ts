import { ProductCart } from './product-cart';

export interface PaymentData {
  name: string;
  lastName: string;
  country: string;
  city: string;
  address: string;
  bankAccount: string;
  cvc: string;
  dueDate: string;
  total: number;
  cart: ProductCart[];
}
