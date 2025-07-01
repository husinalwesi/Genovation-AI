import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ReportComponent } from './pages/report/report.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserAddComponent } from './pages/user-add/user-add.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'report', component: ReportComponent },
  {
    path: 'users',
    children: [
      { path: '', component: UserListComponent },
      { path: 'add', component: UserAddComponent },
    ],
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' },
];
