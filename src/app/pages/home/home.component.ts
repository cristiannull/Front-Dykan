import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { register, SwiperContainer } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
register();

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBarComponent, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  swiperElement = signal<SwiperContainer | null>(null);
  ngOnInit(): void {
    const swiperElemConstructor = document.querySelector('swiper-container');
    const swiperOptions: SwiperOptions = {
      slidesPerView: 1,
      grabCursor: true,
      spaceBetween: 20,
      scrollbar: true,
      breakpoints: {
        250: {
          slidesPerView: 2,
        },
        400: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 6,
        },
        1400: {
          slidesPerView: 8,
        },
      },
    };
    Object.assign(swiperElemConstructor!, swiperOptions);
    this.swiperElement.set(swiperElemConstructor as SwiperContainer);
    this.swiperElement()?.initialize();
  }
}
