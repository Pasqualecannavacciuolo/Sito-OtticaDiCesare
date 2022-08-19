import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LastAddedComponent } from './carousel/last-added/last-added.component';

// Module for custom slideshow
import { SwiperModule } from 'swiper/angular';
import { SlideshowComponent } from './carousel/slideshow/slideshow.component';
import { DiscountComponent } from './carousel/discount/discount.component';

@NgModule({
  declarations: [
    AppComponent,
    LastAddedComponent,
    SlideshowComponent,
    DiscountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
