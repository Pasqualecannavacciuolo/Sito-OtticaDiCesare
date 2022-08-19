import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {

  constructor() { }

  componentName: string = '';
  discountedProducts: any[] = [];

  ngOnInit(): void {
    this.componentName = this.constructor.name
    let tmp_array = [];
    let prod1 = {
      codice: 'GG0808S',
      prezzo: 200,
      immagine: '../../../assets/img/Products/gg0808s_001.png'
    }
    let prod2 = {
      codice: 'GG0809S',
      prezzo: 220,
      immagine: '../../../assets/img/Products/gucci-gg0516s.png'
    }
    let prod3 = {
      codice: 'GG0810S',
      prezzo: 195,
      immagine: '../../../assets/img/Products/gg0808s_001.png'
    }
    tmp_array.push(prod1, prod2, prod3);
    tmp_array.forEach(element => {
      this.discountedProducts.push(element);
    });

  }

}
