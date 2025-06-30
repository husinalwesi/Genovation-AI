import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mobile-menu-bar',
  standalone: true,
  imports: [CommonModule, MenubarModule, ButtonModule, AvatarModule],
  templateUrl: './mobile-menu-bar.component.html',
  styleUrl: './mobile-menu-bar.component.scss'
})
export class MobileMenuBarComponent {
  @Output() onMobileMenuClick: EventEmitter<any> = new EventEmitter();  
  @Input() sidebarVisible = false;

  openMobileMenu(){
    this.onMobileMenuClick.emit();
  }

}
