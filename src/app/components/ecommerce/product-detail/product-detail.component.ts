import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId: any = '';
  product: Product = {
    id: 0,
    name: '',
    price: 0.00,
    quantity: 0,
    category: '',
    img: '',
    rating: 0,
    author: '',
    description: '',
  }

  constructor(private productService: ProductService, 
    private actRoute: ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(params => {
      this.productId = params.get('id');
     
      if(this.productId !== null) {
        this.productService.getProduct(this.productId).subscribe(response => {
          this.product = response;
        });
      }
    });
  }

}
