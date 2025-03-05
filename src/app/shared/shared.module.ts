import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from './services/product.service';
import { RouterModule } from '@angular/router';
import { ProductCardComponent } from '../components/product-card/product-card.component';
import { HeaderComponent } from '../components/header/header.component';
import { CategoryFilterComponent } from '../components/category-filter/category-filter.component';
import { CartComponent } from '../components/cart/cart.component';
import { CheckoutComponent } from '../components/checkout/checkout.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonicModule,
    HttpClientModule,
    FormsModule,
    ProductCardComponent,
    HeaderComponent,
    CategoryFilterComponent,
    CartComponent,
    ReactiveFormsModule,
    CheckoutComponent
 


  ],
  providers : [ProductService],
  exports : [ 
    HttpClientModule,
    FormsModule ,
    CommonModule,
    IonicModule ,
    RouterModule , 
    ProductCardComponent ,
    HeaderComponent ,
    CategoryFilterComponent ,
    CartComponent ,
    ReactiveFormsModule,
    CheckoutComponent
   

  
  ],   
})
export class SharedModule { }
