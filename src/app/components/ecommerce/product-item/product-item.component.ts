import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product = {
    id: 0,
    name: '',
    price: 0.00,
    quantity: 0,
    category: '',
    img: '',
    rating: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

}
