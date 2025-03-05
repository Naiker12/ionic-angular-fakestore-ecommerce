import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { CartService } from 'src/app/shared/services/Cart.Service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone : true,
  imports : [CommonModule , IonicModule ]
  
})
export class HeaderComponent  implements OnInit {

  cartCount: number = 0;

  constructor(
    private cartService: CartService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.cartService.cart$.subscribe(cart => {
      console.log("Productos en el carrito:", cart); // Debug
      this.cartCount = cart.reduce((total, product) => total + product.quantity, 0);
    });
    
  }

  async openCart() {
    const modal = await this.modalController.create({
      component: CartComponent
    });
    await modal.present();
  }

}
