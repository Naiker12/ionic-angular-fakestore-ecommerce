import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from 'src/app/shared/services/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false ,
})
export class HomePage implements OnInit {

  products: any[] = [];
  params = {} as any;
  selectedCategory: string = ''; 
  ProductService: any;
  order: 'asc' | 'desc' = 'asc';

  constructor(private productsSvs: ProductService,

  ) {}

  ngOnInit() {
    this.params.page = 0;
    this.getAllProducts();
  }

  getAllProducts(event?: any){
    this.params.page += 1;

    this.productsSvs.getAllProducts(this.params).subscribe({
      next: (response: any) => {
        this.products.push(...response);
        console.log(this.products);

        if(event) event.target.complete();
      },
      error: (error: any) => {
        if(event) event.target.complete();
      }
    })
  }

  filterByCategory(category: string) {
    console.log('Categoría seleccionada:', category);
    this.productsSvs.getProductsByCategory(category).subscribe((filteredProducts: any[]) => {
      this.products = filteredProducts;
    });
  }

  onOrderChanged(order: 'asc' | 'desc') {
    this.order = order;
    console.log('Orden recibido en ProductsPage:', order);
    this.filterAndSortProducts();
  }
  
  filterAndSortProducts() {
    this.products = this.products
      .filter((p) => this.selectedCategory ? p.category === this.selectedCategory : true)
      .sort((a, b) => this.order === 'asc' ? a.price - b.price : b.price - a.price);
  }
  
}
