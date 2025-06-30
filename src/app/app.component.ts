import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Sidebar, SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';

const MOBILE_BREAKPOINT = 768;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SidebarModule, MenubarModule, ButtonModule, AvatarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  isMobile = false;
  sidebarVisible = false;
  expandedSidebar = true;

  ngOnInit() {
    this.updateLayout();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateLayout();
  }

  private updateLayout() {
    const wasMobile = this.isMobile;
    this.isMobile = window.innerWidth < MOBILE_BREAKPOINT;
    this.sidebarVisible = !this.isMobile;

    if (wasMobile !== this.isMobile && this.sidebarRef) this.sidebarRef.destroyModal();
  }

  toggleSidebarWidth() {
    this.expandedSidebar = !this.expandedSidebar;

    // Soft re-render
    this.sidebarVisible = false;
    setTimeout(() => (this.sidebarVisible = true));
  }
}
