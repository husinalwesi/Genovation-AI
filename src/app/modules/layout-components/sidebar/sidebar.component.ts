import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Sidebar, SidebarModule } from 'primeng/sidebar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, SidebarModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
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

}
