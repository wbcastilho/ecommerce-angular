import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = 'https://sheet.best/api/sheets/ed652bf9-d452-404f-9918-33569ea4f715';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private httpClient: HttpClient) { }

  // Retorna a lista de produtos - READ
  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiUrl);
  }

  // Lista produto unico
  getUser(id: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.apiUrl}/id/${id}`);
  }
}
