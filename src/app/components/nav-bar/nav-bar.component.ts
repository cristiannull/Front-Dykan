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
  constructor(public router: Router) {}

  currentRoute: string = '';

  isMenuOpen = signal(false);
  isProfileMenuOpen = signal(false);
  isDesktopView = signal(window.innerWidth >= 768);
  isMobileView = signal(window.innerWidth < 768);

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = this.router.url;
      }
    });
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }

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

    if (this.isDesktopView()) {
      this.isMenuOpen.set(false);
      this.isProfileMenuOpen.set(false);
    }
  }
}
