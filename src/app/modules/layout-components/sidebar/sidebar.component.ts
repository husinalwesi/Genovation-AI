import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Sidebar, SidebarModule } from 'primeng/sidebar';
import { CommonModule } from '@angular/common';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { MenuItemsComponent } from "../../components/menu-items/menu-items.component";
import { BarsComponent } from "../../icons/bars/bars.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, SidebarModule, ImageModule, ButtonModule, MenuItemsComponent, BarsComponent, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Output() onCloseMobileMenu: EventEmitter<any> = new EventEmitter();  
  @Output() onToggleSidebarWidth: EventEmitter<any> = new EventEmitter();  
  @Output() onMenuHideEmitter: EventEmitter<any> = new EventEmitter();  
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;
  @Input() isMobile = false;
  @Input() sidebarVisible = false;
  @Input() expandedSidebar = true;


  toggleSidebarWidth(){
    this.onToggleSidebarWidth.emit();
  }

  destroyModal(){
    if(this.sidebarRef) this.sidebarRef.destroyModal();
  }

  onMenuHide(){
    this.onMenuHideEmitter.emit();
  }

  onCloseMobileMenuHandler(){
    this.onCloseMobileMenu.emit();
  }

}
