import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { Sidebar, SidebarModule } from 'primeng/sidebar';
import { ToolbarModule } from 'primeng/toolbar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';

const MOBILE_BREAKPOINT = 768;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    SidebarModule,
    ButtonModule,
    RippleModule,
    ToolbarModule,
    PanelMenuModule,
    MenubarModule,
    BadgeModule,
    AvatarModule,
    InputTextModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  isMobile: boolean = false;
  fullView: boolean = true;

  ngOnInit() {
    this.detectDeviceSize();
    this.defineView();
  }

  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  sidebarVisible: boolean = false;

  detectDeviceSize() {
    const tempIsMobile = window.innerWidth < MOBILE_BREAKPOINT;
    const isSwitchFromMobToDeskOrViseVersa = tempIsMobile !== this.isMobile;
    this.isMobile = tempIsMobile;
    if ((isSwitchFromMobToDeskOrViseVersa || this.isMobile) && this.sidebarRef)
      this.sidebarRef.destroyModal();
  }

  @HostListener('window:resize', ['$event']) onWindowResize() {
    this.onResize();
  }

  onResize() {
    this.detectDeviceSize();
    this.defineView();
  }

  defineView() {
    this.sidebarVisible = !this.isMobile;
  }

  toggleDesktopMenu() {
    this.fullView = !this.fullView;
    if (this.sidebarVisible) this.refresh();
  }

  refresh() {
    this.sidebarVisible = false;
    setTimeout(() => (this.sidebarVisible = true), 0);
  }
}
