import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';
@Component({
  selector: 'app-cap-viewer',
  standalone: true,
  imports: [NavBarComponent, CommonModule, FooterComponent],
  templateUrl: './cap-viewer.component.html',
  styleUrls: ['./cap-viewer.component.css'],
})
export class CapViewerComponent {
  repeatCount = new Array(8);
  visibleImages: number[] = [];
  loadedImages = new Set<number>();
  comic = {
    title: 'Me hice cargo de la Academia con un solo cuchillo de sashimi',
  };

  ngOnInit() {
    this.loadImagesSlowly();
  }

  loadImagesSlowly(index = 0) {
    if (index < this.repeatCount.length) {
      setTimeout(() => {
        this.visibleImages.push(index);
        this.loadImagesSlowly(index + 1);
      }, 100); // Ajustá el tiempo según lo que quieras
    }
  }

  onImageLoad(event: Event, index: number) {
    const img = event.target as HTMLImageElement;
    setTimeout(() => {
      img.classList.remove('opacity-0');
      img.classList.add('opacity-100');
      this.loadedImages.add(index);
    }, 1000);
  }
}
