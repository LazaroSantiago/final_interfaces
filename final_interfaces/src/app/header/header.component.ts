import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private router: Router) { }

  isLoggedIn = false;
  showProfileMenu = false;

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
    this.showProfileMenu = false;
  }

  navigateToPremium() {
    this.router.navigate(['/premium']);
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  toggleProfileMenu() {
    this.showProfileMenu = !this.showProfileMenu;
  }

  navigateToProfile() {
    this.router.navigate(['/profile']);
    this.showProfileMenu = false;
  }

  navigateToSearch() {
    this.router.navigate(['/search']);
  }

  // Close profile menu when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.profile-container')) {
      this.showProfileMenu = false;
    }
  }
}