import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly API = environment.API;
 
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private httpClient: HttpClient) { }

  // Retorna a lista de produtos - READ
  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.API}/products`);
  }

  // Lista produto unico
  getProduct(id: string): Observable<Product> {
    return this.httpClient.get<Product>(`${this.API}/product/${id}`);
  }
}
