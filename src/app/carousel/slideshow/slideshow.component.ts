import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
//import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Pagination, Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);
SwiperCore.use([Autoplay]);

interface Product {
  codice: string,
  prezzo: number,
  immagine: string
}

@Component({
  selector: 'app-slideshow',
  template: `<swiper
    [slidesPerView]="2"
    [spaceBetween]="10"
    [autoplay]="{
      delay: 2000,
      disableOnInteraction: false
    }"
    [speed] = "2500"
    [pagination]="{
      clickable: true
    }"
    class="mySwiper"
  >
    <ng-template swiperSlide *ngFor="let product of products">
      <div class="card">
        <div *ngIf="componentName == 'DiscountComponent'" class="discount_image" alt="discount image"></div>
        <img src={{product.immagine}} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{product.codice}}</h5>
          <p class="card-text">{{product.prezzo}}</p>
          <a href="#" class="btn btn-primary">Compra</a>
        </div>
      </div>
    </ng-template>
  </swiper>`,
  styleUrls: ['./slideshow.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SlideshowComponent implements OnInit {

  @Input() componentName = '';
  @Input() products: Product[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.products)
  }

}
