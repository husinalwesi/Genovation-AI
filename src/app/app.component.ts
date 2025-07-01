import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MainContentComponent } from './modules/layout-components/main-content/main-content.component';
import { MobileMenuBarComponent } from './modules/layout-components/mobile-menu-bar/mobile-menu-bar.component';
import { SidebarComponent } from './modules/layout-components/sidebar/sidebar.component';

const MOBILE_BREAKPOINT = 768;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MainContentComponent, MobileMenuBarComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  @ViewChild('mainSidebarRef') mainSidebarRef!: SidebarComponent;

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

    if (wasMobile !== this.isMobile && this.mainSidebarRef) this.mainSidebarRef.destroyModal();
  }

  toggleSidebarWidth() {
    this.expandedSidebar = !this.expandedSidebar;

    // Soft re-render
    this.sidebarVisible = false;
    setTimeout(() => (this.sidebarVisible = true));
  }

  onMobileMenuClick() {
    this.sidebarVisible = true;
  }

  onMenuHideEmitter(){
    if(this.isMobile) this.sidebarVisible = false;
  }

  onCloseMobileMenu(){
    if(this.isMobile) this.sidebarVisible = false;    
  }

}
