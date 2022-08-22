import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { Pagination, Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay]);

@Component({
  selector: 'app-slideshow-categories',
  template: `<swiper
    [slidesPerView]="3"
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
    <ng-template swiperSlide *ngFor="let category of categories">
      <div class="card">
        <div class="card-body">
          <a href="#"><h5 class="card-title">{{category}}</h5></a>
        </div>
      </div>
    </ng-template>
  </swiper>`,
  styleUrls: ['./slideshow-categories.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SlideshowCategoriesComponent implements OnInit {

  constructor() { }

  @Input() categories: any[] = [];

  ngOnInit(): void {
  }

}
