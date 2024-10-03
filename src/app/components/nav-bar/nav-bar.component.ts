import { CommonModule, NgClass } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  isMenuOpen = signal(false);
  isProfileMenuOpen = signal(false);
  isDesktopView = signal(window.innerWidth >= 768);
  isMobileView = signal(window.innerWidth < 768);

  toggleMenu() {
    this.isMenuOpen.update((value) => !value);
  }

  toggleProfileMenu() {
    this.isProfileMenuOpen.update((value) => !value);
  }

  @HostListener('document:click', ['$event'])
  closeMenus(event: Event) {
    const target = event.target as HTMLElement;
    const isProfileButton = target.closest('#profile-button');
    const isMenuButton = target.closest('#menu-button');
    const isProfileMenu = target.closest('#profile-menu');

    if (!isProfileButton && !isProfileMenu) {
      this.isProfileMenuOpen.set(false);
    }

    if (!isMenuButton && !isProfileMenu) {
      this.isMenuOpen.set(false);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const windowWidth = (event.target as Window).innerWidth;
    this.isDesktopView.set(windowWidth >= 768);
    this.isMobileView.set(windowWidth < 768);
  }
}
