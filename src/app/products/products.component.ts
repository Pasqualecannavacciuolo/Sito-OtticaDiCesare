import { Component, OnInit, ViewEncapsulation } from '@angular/core';

interface Product {
  code: string,
  image: string,
  price: number
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],

})
export class ProductsComponent implements OnInit {

  constructor() { }

  products: Product[] = [
    {
      code: 'GG01018S',
      image: '../../../assets/img/Products/gg0808s_001.png',
      price: 200
    },
    {
      code: 'GG01018S',
      image: '../../../assets/img/Products/gucci-gg0516s.png',
      price: 489
    },
    {
      code: 'GG01018S',
      image: '../../../assets/img/Products/gg0808s_001.png',
      price: 320
    },
    {
      code: 'GG01018S',
      image: '../../../assets/img/Products/gucci-gg0516s.png',
      price: 174
    },

  ];

  ngOnInit(): void {

  }

}
