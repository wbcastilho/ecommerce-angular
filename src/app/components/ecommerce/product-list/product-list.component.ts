import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Array<Product> = [
    {
      id: 1,
      name: 'Máquina de Lavar 15Kg Electrolux',
      price: 1500.00,
      quantity: 10,
      category: 'Eletrodomésticos',
      img: '',
      rating: 4
    },
    {
      id: 2,
      name: 'Televisão LG 45 polegadas',
      price: 3000.00,
      quantity: 6,
      category: 'TV',
      img: '',
      rating: 5
    },
    {
      id: 3,
      name: 'Geladeira Consul',
      price: 5000.00,
      quantity: 6,
      category: 'Eletrodomésticos',
      img: '',
      rating: 3
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
