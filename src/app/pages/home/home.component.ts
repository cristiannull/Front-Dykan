import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  signal,
  HostListener,
} from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { register, SwiperContainer } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
import { CardComponent } from '../../components/card/card.component';
import { RouterLink } from '@angular/router';
register();

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBarComponent, CommonModule, CardComponent, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  repeatCount = new Array(8);

  swiperElement = signal<SwiperContainer | null>(null);
  ngOnInit(): void {
    const swiperElemConstructor = document.querySelector('swiper-container');
    const swiperOptions: SwiperOptions = {
      slidesPerView: 1,
      grabCursor: true,
      spaceBetween: 20,
      breakpoints: {
        250: {
          slidesPerView: 2,
        },
        400: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
        1279: {
          slidesPerView: 5,
        },
      },
    };
    Object.assign(swiperElemConstructor!, swiperOptions);
    this.swiperElement.set(swiperElemConstructor as SwiperContainer);
    this.swiperElement()?.initialize();
  }
  showButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const yOffset =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    this.showButton = yOffset > 400; // Mostrar el botón cuando el scroll sea mayor a 200px
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
