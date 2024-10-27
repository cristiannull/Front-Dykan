import { CommonModule, NgClass } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';
import { Router, RouterLink, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, NgClass, RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  currentRoute: string = '';

  isMenuOpen = signal(false);
  isProfileMenuOpen = signal(false);

  constructor(public router: Router) {}

  toggleMenu() {
    this.isMenuOpen.update((value) => !value);
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  toggleProfileMenu() {
    this.isProfileMenuOpen.update((value) => !value);
  }

  @HostListener('document:click', ['$event'])
  closeMenus(event: Event) {
    const target = event.target as HTMLElement;
    const isProfileButton = target.closest('#profile-butto');
    const isMenuButton = target.closest('#menu-button');
    const isProfileMenu = target.closest('#profile-menu');
    const isMenu = target.closest('#menu');

    if (!isProfileButton && !isProfileMenu) {
      this.isProfileMenuOpen.set(false);
    }

    if (!isMenuButton && !isMenu) {
      this.isMenuOpen.set(false);
    }
  }
}
