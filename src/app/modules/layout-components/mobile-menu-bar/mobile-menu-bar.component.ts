import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { CommonModule } from '@angular/common';
import { ImageModule } from 'primeng/image';
import { ChipModule } from 'primeng/chip';
import { DashboardComponent } from '../../icons/dashboard/dashboard.component';
import { OrganizationComponent } from '../../icons/organization/organization.component';
import { ReportComponent } from '../../icons/report/report.component';
import { UsersComponent } from '../../icons/users/users.component';

export const componentMapper: { [key: string]: any } = {
  dashboard: DashboardComponent,
  report: ReportComponent,
  organization: OrganizationComponent,
  users: UsersComponent,  
};

@Component({
  selector: 'app-mobile-menu-bar',
  standalone: true,
  imports: [CommonModule, MenubarModule, ButtonModule, AvatarModule, ImageModule, ChipModule],
  templateUrl: './mobile-menu-bar.component.html',
  styleUrl: './mobile-menu-bar.component.scss'
})
export class MobileMenuBarComponent {
  @Output() onMobileMenuClick: EventEmitter<any> = new EventEmitter();  
  @Input() sidebarVisible = false;
  mapper = componentMapper;

  openMobileMenu(){
    this.onMobileMenuClick.emit();
  }

}
