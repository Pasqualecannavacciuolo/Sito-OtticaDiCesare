import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-last-added',
  templateUrl: './last-added.component.html',
  styleUrls: ['./last-added.component.css']
})
export class LastAddedComponent implements OnInit {

  constructor() { }

  lastAddedProducts: any[] = [];

  ngOnInit(): void {
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
    let prod4 = {
      codice: 'GG0811S',
      prezzo: 345,
      immagine: '../../../assets/img/Products/gucci-gg0516s.png'
    }
    let prod5 = {
      codice: 'GG0812S',
      prezzo: 569,
      immagine: '../../../assets/img/Products/gg0808s_001.png'
    }
    tmp_array.push(prod1, prod2, prod3, prod4, prod5);
    tmp_array.forEach(element => {
      this.lastAddedProducts.push(element);
    });
  }

}
