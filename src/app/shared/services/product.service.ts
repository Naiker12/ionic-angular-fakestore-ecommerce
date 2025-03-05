import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl: any;
 constructor(private http: HttpClient) { }

  getAllProducts(params : any) {
    return this.http.get(environment.baseUrl + environment.products , {params})
  }
 
  getProductsById(id: string){
    return this.http.get(environment.baseUrl +  environment.products +  id );
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(`https://fakestoreapi.com/products/category/${category}`);
  }
  
}
