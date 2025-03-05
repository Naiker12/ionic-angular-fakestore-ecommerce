import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ProductCart } from 'src/app/shared/interface/product-cart';
import { CartService } from 'src/app/shared/services/Cart.Service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
  standalone: false
})
export class ProductDetailPage implements OnInit {

  productId: string = ''; 
  product: any = null;

  constructor(
    private actRouter: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.productId = this.actRouter.snapshot.paramMap.get('id') as string;
    console.log('Producto ID:', this.productId);
    this.getProduct();
  }

  getProduct() {
    if (!this.productId) {
      console.error('No se encontró un ID válido en la URL.');
      return;
    }

    this.productService.getProductsById(this.productId).subscribe({
      next: (res: any) => {
        console.log('Producto obtenido:', res);
        this.product = res;
      },
      error: (err: any) => {
        console.error('Error al obtener el producto:', err);
      }
    });
  }

  addToCart(product: any) {
    const productToAdd: ProductCart = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1 
    };
  
    this.cartService.addToCart(productToAdd);
    this.showToast('Producto agregado al carrito');
  }
  

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'top',
      color: 'success'
    });
    await toast.present();
  }

}
