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
      name: 'Drácula - Edição de Luxo',
      price: 34.90,
      quantity: 10,
      category: 'Terror',
      img: '',
      rating: 4,
      author: 'Bram Stoker',
      description: ''
    },
    {
      id: 2,
      name: 'O Senhor do Anéis - A Sociedade do Anel ',
      price: 33.90,
      quantity: 6,
      category: 'Fantasia',
      img: '',
      rating: 5,
      author: 'J.R.R. Tolkien',
      description: ''
    },
    {
      id: 3,
      name: 'Under The Dome',
      price: 29.90,
      quantity: 6,
      category: 'Terror',
      img: '',
      rating: 3,
      author: 'Stephen King',
      description: ''
    },
    {
      id: 4,
      name: 'Mais Esperto que o Diabo',
      price: 29.90,
      quantity: 6,
      category: 'Motivação',
      img: '',
      rating: 3,
      author: 'Napoleon Hill',
      description: ''
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
