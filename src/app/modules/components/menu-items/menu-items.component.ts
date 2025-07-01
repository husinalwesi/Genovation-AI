import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { PanelMenuModule } from 'primeng/panelmenu';
import { BadgeModule } from 'primeng/badge';
import { ChipModule } from 'primeng/chip';
import { DashboardComponent } from '../../icons/dashboard/dashboard.component';
import { OrganizationComponent } from '../../icons/organization/organization.component';
import { ReportComponent } from '../../icons/report/report.component';
import { UsersComponent } from '../../icons/users/users.component';
import { AvatarModule } from 'primeng/avatar';
import { Router } from '@angular/router';
import { InvoicesComponent } from '../../icons/invoices/invoices.component';

export const componentMapper: { [key: string]: any } = {
  dashboard: DashboardComponent,
  report: ReportComponent,
  organization: OrganizationComponent,
  users: UsersComponent,  
  invoices: InvoicesComponent
};

@Component({
  selector: 'app-menu-items',
  standalone: true,
  imports: [CommonModule, PanelMenuModule, BadgeModule, ChipModule, AvatarModule],
  templateUrl: './menu-items.component.html',
  styleUrl: './menu-items.component.scss'
})
export class MenuItemsComponent {
    @Output() onCloseMobileMenu: EventEmitter<any> = new EventEmitter();  
    @Input() collapsedSidebar: boolean = true;
    mapper = componentMapper;
    items: MenuItem[] = [
            {
                label: 'Dashboard',
                icon: 'dashboard',
                route: '/'                
            },
            {
                label: 'Report',
                icon: 'report',
                route: '/report'
            },
            {
                label: 'Organization',
                icon: 'organization',
                expanded: true,
                items: [
                    {
                        title: 'Assets'
                    },                    
                    {
                        label: 'Invoices',
                        icon: 'invoices',
                        route: '/invoices'
                    },
                    {
                        label: 'Users',
                        icon: 'users',
                        route: '/users',
                        extraIcon: 'pi pi-plus',
                        extraIconRoute: '/users/add'
                    }
                ]
            },
            {
                isSpecialItem: true,
                userData: {
                    name: 'John Doe',
                    role: 'Admin',
                    img: 'images/users/john-doe.png'
                }
            },            
    ];

    constructor(private router: Router) {}

    ngOnInit() {
    }

    naviagateInnerURL(event:any, url: string){
        event.preventDefault();
        event.stopPropagation();
        this.router.navigate([url]);
        this.closeMobileMenu(url);
    }

    closeMobileMenu(route: string){
        if(route) this.onCloseMobileMenu.emit();
    }

}
