import { Component, Input, OnInit } from '@angular/core';

interface Product {
  code: string,
  image: string,
  price: number
}

@Component({
  selector: 'app-general-products-grid',
  templateUrl: './general-products-grid.component.html',
  styleUrls: ['./general-products-grid.component.css']
})
export class GeneralProductsGridComponent implements OnInit {

  constructor() { }

  @Input() products: Product[] = [];

  ngOnInit(): void {
  }

}
