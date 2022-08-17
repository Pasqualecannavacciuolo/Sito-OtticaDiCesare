import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";
// install Swiper modules
SwiperCore.use([Pagination]);


@Component({
  selector: 'app-slideshow',
  template: `<swiper
    [slidesPerView]="2"
    [spaceBetween]="30"
    [pagination]="{
      clickable: true
    }"
    class="mySwiper"
  >
    <ng-template swiperSlide>
      <div class="card">
        <img src="../../assets/img/Products/gg0808s_001.png" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Prodotto</h5>
          <p class="card-text">200€</p>
          <a href="#" class="btn btn-primary">Compra</a>
        </div>
      </div>
    </ng-template>
    <ng-template swiperSlide>
    <div class="card">
        <img src="../../assets/img/Products/gucci-gg0516s.png" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Prodotto</h5>
          <p class="card-text">250€</p>
          <a href="#" class="btn btn-primary">Compra</a>
        </div>
      </div>
    </ng-template>
    <ng-template swiperSlide>
      <div class="card">
        <img src="../../assets/img/Products/gg0808s_001.png" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Prodotto</h5>
          <p class="card-text">200€</p>
          <a href="#" class="btn btn-primary">Compra</a>
        </div>
      </div>
    </ng-template>
    <ng-template swiperSlide>
    <div class="card">
        <img src="../../assets/img/Products/gucci-gg0516s.png" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Prodotto</h5>
          <p class="card-text">200€</p>
          <a href="#" class="btn btn-primary">Compra</a>
        </div>
      </div>
    </ng-template>
    <ng-template swiperSlide>
      <div class="card">
        <img src="../../assets/img/Products/gg0808s_001.png" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Prodotto</h5>
          <p class="card-text">200€</p>
          <a href="#" class="btn btn-primary">Compra</a>
        </div>
      </div>
    </ng-template>
    <ng-template swiperSlide>
    <div class="card">
        <img src="../../assets/img/Products/gucci-gg0516s.png" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Prodotto</h5>
          <p class="card-text">200€</p>
          <a href="#" class="btn btn-primary">Compra</a>
        </div>
      </div>
    </ng-template>
    <ng-template swiperSlide>
      <div class="card">
        <img src="../../assets/img/Products/gg0808s_001.png" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Prodotto</h5>
          <p class="card-text">200€</p>
          <a href="#" class="btn btn-primary">Compra</a>
        </div>
      </div>
    </ng-template>
    <ng-template swiperSlide>
    <div class="card">
        <img src="../../assets/img/Products/gucci-gg0516s.png" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Prodotto</h5>
          <p class="card-text">200€</p>
          <a href="#" class="btn btn-primary">Compra</a>
        </div>
      </div>
    </ng-template>
    <ng-template swiperSlide>
      <div class="card">
        <img src="../../assets/img/Products/gg0808s_001.png" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Prodotto</h5>
          <p class="card-text">200€</p>
          <a href="#" class="btn btn-primary">Compra</a>
        </div>
      </div>
    </ng-template>
    <ng-template swiperSlide>
    <div class="card">
        <img src="../../assets/img/Products/gucci-gg0516s.png" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Prodotto</h5>
          <p class="card-text">200€</p>
          <a href="#" class="btn btn-primary">Compra</a>
        </div>
      </div>
    </ng-template>
    <ng-template swiperSlide>
      <div class="card">
        <img src="../../assets/img/Products/gg0808s_001.png" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Prodotto</h5>
          <p class="card-text">200€</p>
          <a href="#" class="btn btn-primary">Compra</a>
        </div>
      </div>
    </ng-template>
    <ng-template swiperSlide>
    <div class="card">
        <img src="../../assets/img/Products/gucci-gg0516s.png" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Prodotto</h5>
          <p class="card-text">200€</p>
          <a href="#" class="btn btn-primary">Compra</a>
        </div>
      </div>
    </ng-template>
  </swiper>`,
  styleUrls: ['./slideshow.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SlideshowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
