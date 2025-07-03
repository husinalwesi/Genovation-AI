import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MainContentComponent } from './modules/layout-components/main-content/main-content.component';
import { MobileMenuBarComponent } from './modules/layout-components/mobile-menu-bar/mobile-menu-bar.component';
import { SidebarComponent } from './modules/layout-components/sidebar/sidebar.component';
import { SharedService } from './serives/shared.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

const MOBILE_BREAKPOINT = 1024.98;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MainContentComponent, MobileMenuBarComponent, SidebarComponent, ToastModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [MessageService]
})
export class AppComponent implements OnInit {
  @ViewChild('mainSidebarRef') mainSidebarRef!: SidebarComponent;

  isMobile = false;
  sidebarVisible = false;
  expandedSidebar = true;
  isAriaLabelHandled: boolean = false;

  constructor(private sharedService: SharedService){}

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
    this.updateAriaLabel();
  }

  toggleSidebarWidth() {
    this.expandedSidebar = !this.expandedSidebar;

    // Soft re-render
    this.sidebarVisible = false;
    setTimeout(() => (this.sidebarVisible = true));
  }

  onMobileMenuClick() {
    this.sidebarVisible = true;
    this.updateAriaLabel();
  }

  onMenuHideEmitter(){
    if(this.isMobile) this.sidebarVisible = false;
  }

  onCloseMobileMenu(){
    if(this.isMobile) this.sidebarVisible = false;    
  }

  updateAriaLabel(){
    if(this.isAriaLabelHandled) return;
    // This case is not handled in the official documentation
    setTimeout(() => {
      const listItems = document.querySelectorAll("p-panelmenusub > ul > li");
      if (!listItems || listItems.length === 0) {
        return;
      }

      listItems.forEach((item, index) => {
        let text = '';

        // Try to get text from .sub-menu-title
        const titleEl = item.querySelector<HTMLElement>(".sub-menu-title");
        if (titleEl) {
          text = (titleEl.textContent || '').trim();
        }

        // Fallback: try to get text from .menu-item-label
        if (!text) {
          const labelEl = item.querySelector<HTMLElement>(".menu-item-label");
          if (labelEl) {
            text = (labelEl.textContent || '').trim();
          }
        }

        // Final fallback: use 'item' + index
        if (!text) {
          text = `item${index}`;
        }

        item.setAttribute("aria-label", text);
      });

      this.isAriaLabelHandled = true;
    });
  }

}
