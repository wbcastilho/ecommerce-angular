import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Array<Product> = [];
  loading: boolean;
 
  constructor(private productService: ProductService) { 
    this.loading = true;
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {    
    this.productService.getProducts().subscribe({
      next: response => {
        this.loading = false;
        this.products = response
      },
      error: err => console.log('ERRO AO EXECUTAR', err)      
    });
  }

}
