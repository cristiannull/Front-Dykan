import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';
import { CardComponent } from '../../components/card/card.component';
import { FooterComponent } from '../../components/footer/footer.component';
register();

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBarComponent, CommonModule, CardComponent, FooterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  repeatCount = new Array(8);

  images: string[] = [
    'all-mito.jpg',
    'deadpool.jpg',
    'luffy.jpg',
    'picture-in-picture.jpg',
    'red-mask.jpg',
  ];

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
