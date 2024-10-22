import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { CardComponent } from '../../components/card/card.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [NavBarComponent, CardComponent, CommonModule, RouterLink],
  templateUrl: './library.component.html',
  styleUrl: './library.component.css',
})
export class LibraryComponent {
  repeatCount = new Array(8);
}
