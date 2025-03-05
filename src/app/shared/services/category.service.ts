import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'https://fakestoreapi.com/products/categories';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl);
  }

  // getProductsByCategory(category: string): Observable<Product[]> {
  //   return this.http.get<Product[]>(`${this.apiUrl}/products/category/${category}`);
  // }
}
